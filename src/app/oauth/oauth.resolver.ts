import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { OauthService } from '@/app/oauth/oauth.service';
import { RealIp } from '@/common/real-ip/real-ip.decorator';

@Resolver()
export class OauthResolver {
  constructor(private readonly oauthService: OauthService) {}

  @Mutation(() => String, { name: 'getAccessToken' })
  async getAccessToken(@Args('code') code: string, @RealIp() ip: string) {
    return await this.oauthService.getAccessTokenByCode(code, ip);
  }
}
