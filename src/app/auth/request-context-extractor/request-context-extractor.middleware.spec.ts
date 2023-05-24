import { RequestContextExtractorMiddleware } from '@/app/auth/request-context-extractor/request-context-extractor.middleware';
import { CryptoService } from '@/common/crypto/crypto.service';
import { PrismaService } from '@/common/prisma/prisma.service';

describe('RequestContextExtractorMiddleware', () => {
  test('should be defined', () => {
    expect(
      new RequestContextExtractorMiddleware(
        new PrismaService(),
        new CryptoService(),
      ),
    ).toBeDefined();
  });
});
