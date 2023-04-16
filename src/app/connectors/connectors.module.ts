import { Module } from '@nestjs/common';

import { Auth0Resolver } from './auth0/auth0.resolver';
import { Auth0Service } from './auth0/auth0.service';

@Module({
  providers: [Auth0Resolver, Auth0Service],
})
export class ConnectorsModule {}
