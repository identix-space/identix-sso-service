import { Injectable } from '@nestjs/common';

import { OAuthProvider } from '@/@generated/nestgraphql/prisma/o-auth-provider.enum';
import { AccountSessionService } from '@/app/account-session/account-session.service';
import { WalletsServiceClientService } from '@/app/wallets-service-client/wallets-service-client.service';
import {
  CryptoService,
  RandomStringType,
} from '@/common/crypto/crypto.service';
import { PrismaService } from '@/common/prisma/prisma.service';

interface IConnectionData {
  provider: OAuthProvider;
  uid: string;
  email?: string;
  name?: string;
  avatar?: string;
}

@Injectable()
export class OauthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly cryptoService: CryptoService,
    private readonly accountSessionService: AccountSessionService,
    private readonly walletServiceClientService: WalletsServiceClientService,
  ) {}

  isRedirectUriAllowed(uri: string): boolean {
    const allowedRedirectUris =
      process.env.OAUTH_ALLOWED_REDIRECT_URIS?.split(',');
    return allowedRedirectUris?.includes(uri) ?? false;
  }

  async generateCode(connection: IConnectionData): Promise<string> {
    const code = await this.cryptoService.generateRandomString(
      RandomStringType.OAUTH_CODE,
    );
    // expires in 5 minutes
    // eslint-disable-next-line no-magic-numbers
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000);
    const oAuthConnection = await this.prisma.oAuthConnection.findFirst({
      where: {
        provider: connection.provider,
        uid: connection.uid,
      },
      include: {
        account: true,
      },
    });

    const did = await this.walletServiceClientService.createDid({
      provider: connection.provider,
      userId: connection.uid,
    });

    await (oAuthConnection
      ? this.prisma.oAuthCode.create({
          data: {
            code,
            expiresAt,
            oAuthConnection: {
              connect: {
                id: oAuthConnection.id,
              },
            },
          },
        })
      : this.prisma.oAuthConnection.create({
          data: {
            provider: connection.provider,
            uid: connection.uid,
            email: connection.email,
            name: connection.name,
            avatar: connection.avatar,
            oAuthCodes: {
              create: {
                code,
                expiresAt,
              },
            },
            account: {
              create: {
                did,
                status: 'ACTIVE',
              },
            },
          },
          include: {
            account: true,
          },
        }));

    return code;
  }

  async getAccessTokenByCode(
    code: string,
    ipAddr: string,
    userAgent?: string,
  ): Promise<string> {
    await this.deleteExpiredOAuthCodes();

    const accessToken = await this.cryptoService.generateRandomString(
      RandomStringType.ACCESS_TOKEN,
    );

    const oAuthCode = await this.prisma.oAuthCode.findFirstOrThrow({
      where: {
        code,
      },
      include: {
        oAuthConnection: {
          include: {
            account: true,
          },
        },
      },
    });

    await this.prisma.oAuthCode.delete({
      where: {
        code,
      },
    });

    await this.accountSessionService.createAccountSession(
      oAuthCode.oAuthConnection.account.id,
      accessToken,
      ipAddr,
      userAgent,
    );

    return accessToken;
  }

  private async deleteExpiredOAuthCodes(): Promise<void> {
    await this.prisma.oAuthCode.deleteMany({
      where: {
        expiresAt: {
          lt: new Date(),
        },
      },
    });
  }
}
