import { Test, TestingModule } from '@nestjs/testing';

import { OAuthProvider } from '@/@generated/nestgraphql/prisma/o-auth-provider.enum';
import { AccountSessionModule } from '@/app/account-session/account-session.module';
import { AccountSessionService } from '@/app/account-session/account-session.service';
import { CryptoModule } from '@/common/crypto/crypto.module';
import { PrismaModule } from '@/common/prisma/prisma.module';

import { OauthService } from './oauth.service';

describe('OauthService', () => {
  let service: OauthService;
  let accountSessionService: AccountSessionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule, CryptoModule, AccountSessionModule],
      providers: [OauthService],
    }).compile();

    service = module.get<OauthService>(OauthService);
    accountSessionService = module.get<AccountSessionService>(
      AccountSessionService,
    );
  });

  test('should create code and get account by it', async () => {
    const connection = {
      provider: OAuthProvider.AUTH0,
      uid: 'auth0|uid_fixed2',
      avatar: 'avatar',
      name: 'name',
      email: 'email',
    };

    const code = await service.generateCode('state', connection);

    expect(code).toBeDefined();

    const accessToken = await service.getAccessTokenByCode(code, '127.0.0.1');

    expect(accessToken).toBeDefined();

    const accountSession = await accountSessionService.getAccountSessionByToken(
      accessToken,
    );

    expect(accountSession).toBeDefined();

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const account = await accountSessionService.getAccount(accountSession!);

    expect(account).toBeDefined();

    console.log(account);
  });
});
