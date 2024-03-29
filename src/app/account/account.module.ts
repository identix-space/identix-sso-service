import { Module } from '@nestjs/common';

import { AccountSessionModule } from '@/app/account-session/account-session.module';
import { WalletsServiceClientModule } from '@/app/wallets-service-client/wallets-service-client.module';
import { CryptoModule } from '@/common/crypto/crypto.module';
import { PrismaModule } from '@/common/prisma/prisma.module';

import { AccountGateway } from './account.gateway';
import { AccountResolver } from './account.resolver';
import { AccountService } from './account.service';

@Module({
  imports: [
    PrismaModule,
    CryptoModule,
    AccountSessionModule,
    WalletsServiceClientModule,
  ],
  providers: [AccountService, AccountResolver, AccountGateway],
  exports: [AccountService, AccountResolver, AccountGateway],
})
export class AccountModule {}
