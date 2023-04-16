import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { OAuthProvider } from '@/@generated/nestgraphql/prisma/o-auth-provider.enum';
import { Auth0Service } from '@/app/connectors/auth0/auth0.service';
import { OauthService } from '@/app/oauth/oauth.service';

@Resolver()
export class Auth0Resolver {
  constructor(
    private readonly oauthService: OauthService,
    private readonly auth0Service: Auth0Service,
  ) {}

  @Query(() => String, { name: 'generateUrlAuth0' })
  async generateUrl(@Args('redirectUri') redirectUri: string) {
    return await this.auth0Service.generateUrl(redirectUri);
  }

  @Mutation(() => String, { name: 'getCodeByAuth0' })
  async getCode(
    @Args('code') code: string,
    @Args('redirectUri') redirectUri: string,
  ) {
    const { accessToken } = await this.auth0Service.getTokens(
      code,
      redirectUri,
    );

    const userInfo = await this.auth0Service.getUserInfo(accessToken);

    return await this.oauthService.generateCode({
      provider: OAuthProvider.AUTH0,
      uid: userInfo.sub,
    });
  }
}
