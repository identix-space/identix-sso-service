import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { AccountService } from '@/app/account/account.service';
import { GenerateEmailCodeResponse } from '@/app/account/types';
import { AccountSessionService } from '@/app/account-session/account-session.service';
import { AuthGuard } from '@/app/auth/auth/auth.guard';
import { RequestContext } from '@/app/auth/request-context-extractor/interfaces';
import { EmailService } from '@/app/email/email.service';
import { OneTimeCodeService } from '@/app/one-time-code/one-time-code.service';
import { RequestContextDecorator } from '@/app/request-context.decorator';
import { CryptoService } from '@/common/crypto/crypto.service';

@Resolver()
export class AuthResolver {
  constructor(
    private accountService: AccountService,
    private accountSessionService: AccountSessionService,
    private cryptoService: CryptoService,
    private oneTimeCodeService: OneTimeCodeService,
    private emailService: EmailService,
  ) {}

  @Mutation(() => Boolean)
  @UseGuards(new AuthGuard())
  async logout(
    @Args('sessionIds', {
      type: () => [Number],
    })
    sessionIds: number[],
    @RequestContextDecorator() context: RequestContext,
  ): Promise<boolean> {
    return await this.accountSessionService.deleteSessions(
      // Should be because AuthGuard is used
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      context.account!,
      sessionIds,
    );
  }

  @Mutation(() => GenerateEmailCodeResponse)
  async generateEmailCode(
    @Args('email') email: string,
  ): Promise<GenerateEmailCodeResponse> {
    const result = await this.oneTimeCodeService.createOneTimeCode(email);
    const sendEmailResult = await this.emailService.sendEmail(
      email,
      'Activation code',
      `Your activation code is: ${result.code}`,
    );

    if (sendEmailResult) {
      return {
        result: true,
        expiresAt: result.expiresAt,
      };
    } else {
      throw new Error('Sending email error');
    }
  }
}
