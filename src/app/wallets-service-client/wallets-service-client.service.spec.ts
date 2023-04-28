import { Test, TestingModule } from '@nestjs/testing';

import { OAuthProvider } from '@/@generated/nestgraphql/prisma/o-auth-provider.enum';
import { LoggerModule } from '@/common/logger/logger.module';

import { WalletsServiceClientService } from './wallets-service-client.service';

describe('WalletsServiceClientService', () => {
  let service: WalletsServiceClientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [LoggerModule],
      providers: [WalletsServiceClientService],
    }).compile();

    service = module.get<WalletsServiceClientService>(
      WalletsServiceClientService,
    );
  });

  test('should create DID', async () => {
    const did = await service.createDid({
      provider: OAuthProvider.UAEPASS,
      // eslint-disable-next-line no-magic-numbers
      userId: '123456789test', // Math.random().toString().slice(2),
    });
    console.log(did);
    expect(did).toBeDefined();
  });
});
