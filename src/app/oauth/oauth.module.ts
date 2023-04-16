import { Module } from '@nestjs/common';

import { AccountSessionModule } from '@/app/account-session/account-session.module';
import { CryptoModule } from '@/common/crypto/crypto.module';
import { PrismaModule } from '@/common/prisma/prisma.module';

import { OauthResolver } from './oauth.resolver';
import { OauthService } from './oauth.service';

@Module({
  imports: [PrismaModule, CryptoModule, AccountSessionModule],
  providers: [OauthResolver, OauthService],
})
export class OauthModule {}
