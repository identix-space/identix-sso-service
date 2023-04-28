import { Module } from '@nestjs/common';

import { WalletsServiceClientService } from './wallets-service-client.service';

@Module({
  providers: [WalletsServiceClientService],
  exports: [WalletsServiceClientService],
})
export class WalletsServiceClientModule {}
