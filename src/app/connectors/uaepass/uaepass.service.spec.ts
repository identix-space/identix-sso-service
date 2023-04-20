import { Test, TestingModule } from '@nestjs/testing';

import { UaepassService } from './uaepass.service';

describe('UaepassService', () => {
  let service: UaepassService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UaepassService],
    }).compile();

    service = module.get<UaepassService>(UaepassService);
  });

  test('should login', async () => {
    const url = service.generateUrl('http://localhost:4000/callback');
    console.log(url);
    expect(service).toBeDefined();

    const { accessToken } = await service.getTokens(
      '0f66c194-1ae4-3bf9-924e-a4b9f7fcce3e',
      'http://localhost:4000/callback',
    );
    console.log(accessToken);

    expect(accessToken).toBeDefined();

    const userInfo = await service.getUserInfo(accessToken);
    console.log(userInfo);

    expect(userInfo).toBeDefined();
  });
});
