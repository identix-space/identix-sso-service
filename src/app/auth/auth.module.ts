import { Module } from '@nestjs/common';

import { AccountModule } from '@/app/account/account.module';
import { AccountSessionModule } from '@/app/account-session/account-session.module';
import { AuthResolver } from '@/app/auth/auth.resolver';
import { EmailModule } from '@/app/email/email.module';
import { OneTimeCodeModule } from '@/app/one-time-code/one-time-code.module';
import { CryptoModule } from '@/common/crypto/crypto.module';
import { PrismaModule } from '@/common/prisma/prisma.module';

@Module({
  imports: [
    CryptoModule,
    PrismaModule,
    AccountModule,
    AccountSessionModule,
    OneTimeCodeModule,
    EmailModule,
  ],
  providers: [AuthResolver],
  exports: [AuthResolver],
})
export class AuthModule {}
