import { Test, TestingModule } from '@nestjs/testing';

import { UaepassResolver } from './uaepass.resolver';

describe('UaepassResolver', () => {
  let resolver: UaepassResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UaepassResolver],
    }).compile();

    resolver = module.get<UaepassResolver>(UaepassResolver);
  });

  test('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
