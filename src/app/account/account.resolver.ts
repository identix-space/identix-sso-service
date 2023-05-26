import { HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';

import { Account } from '@/@generated/nestgraphql/account/account.model';
import { AccountSession } from '@/@generated/nestgraphql/account-session/account-session.model';
import { AccountService } from '@/app/account/account.service';
import { UpdateAccountInput } from '@/app/account/types';
import { AccountSessionService } from '@/app/account-session/account-session.service';
import { AuthGuard } from '@/app/auth/auth/auth.guard';
import { RequestContext } from '@/app/auth/request-context-extractor/interfaces';
import { RequestContextDecorator } from '@/app/request-context.decorator';
import { WalletsServiceClientService } from '@/app/wallets-service-client/wallets-service-client.service';

@Resolver(() => Account)
export class AccountResolver {
  constructor(
    private readonly accountSessionService: AccountSessionService,
    private readonly accountService: AccountService,
    private readonly walletsServiceClientService: WalletsServiceClientService,
  ) {}

  @Query(() => Account, { name: 'whoami' })
  @UseGuards(AuthGuard)
  whoami(@RequestContextDecorator() context: RequestContext): Account {
    // Should be because AuthGuard is used
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return context.account!;
  }

  @ResolveField(() => [AccountSession])
  @UseGuards(AuthGuard)
  async sessions(
    @Parent() account: Account,
    @RequestContextDecorator() context: RequestContext,
  ): Promise<Array<AccountSession>> {
    if (context.account?.id !== account.id) {
      throw new Error('Unauthorized');
    }
    return this.accountSessionService.getSessions(account);
  }

  // update account mutation
  @Mutation(() => Account)
  @UseGuards(AuthGuard)
  async updateAccount(
    @RequestContextDecorator() context: RequestContext,
    @Args('input') input: UpdateAccountInput,
  ): Promise<Account> {
    // Should be because AuthGuard is used
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.accountService.updateAccount(context.account!, input);
  }

  // delete account mutation
  @Mutation(() => Boolean)
  @UseGuards(AuthGuard)
  async deleteAccount(
    @RequestContextDecorator() context: RequestContext,
  ): Promise<boolean> {
    if (!context.account?.did) {
      throw new HttpException('Account has no DID', HttpStatus.BAD_REQUEST);
    }
    await this.walletsServiceClientService.deleteAccountByDid(
      context.account?.did,
    );
    // Should be because AuthGuard is used
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.accountService.deleteAccount(context.account!);
  }
}
