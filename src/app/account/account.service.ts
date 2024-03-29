import { Injectable } from '@nestjs/common';

import { Account } from '@/@generated/nestgraphql/account/account.model';
import { AccountGateway } from '@/app/account/account.gateway';
import { UpdateAccountInput } from '@/app/account/types';
import { CryptoService } from '@/common/crypto/crypto.service';
import { PrismaService } from '@/common/prisma/prisma.service';

@Injectable()
export class AccountService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly crypto: CryptoService,
    private readonly accountGateway: AccountGateway,
  ) {}

  async updateAccount(account: Account, input: UpdateAccountInput) {
    await this.accountGateway.sendToAccount(
      account.id,
      'accountUpdated',
      input,
    );
    return this.prisma.account.update({
      where: {
        id: account.id,
      },
      data: input,
    });
  }

  async deleteAccount(account: Account): Promise<boolean> {
    await this.accountGateway.sendToAccount(account.id, 'accountDeleted', {});
    await this.prisma.$transaction([
      this.prisma.oAuthConnection.deleteMany({
        where: {
          account: {
            id: account.id,
          },
        },
      }),
      this.prisma.accountSession.deleteMany({
        where: {
          accountId: account.id,
        },
      }),
      this.prisma.account.delete({
        where: {
          id: account.id,
        },
      }),
    ]);
    return true;
  }
}
