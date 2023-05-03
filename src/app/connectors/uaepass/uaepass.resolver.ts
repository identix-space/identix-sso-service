import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { OAuthProvider } from '@/@generated/nestgraphql/prisma/o-auth-provider.enum';
import { UaepassService } from '@/app/connectors/uaepass/uaepass.service';
import { OauthService } from '@/app/oauth/oauth.service';

@Resolver()
export class UaepassResolver {
  constructor(
    private readonly oauthService: OauthService,
    private readonly uaepassService: UaepassService,
  ) {}

  @Query(() => String, { name: 'generateUrlUaepass' })
  async generateUrl(@Args('redirectUri') redirectUri: string) {
    return await this.uaepassService.generateUrl(redirectUri);
  }

  @Mutation(() => String, { name: 'getCodeByUaepass' })
  async getCode(
    @Args('code') code: string,
    @Args('redirectUri') redirectUri: string,
  ) {
    const { accessToken } = await this.uaepassService.getTokens(
      code,
      redirectUri,
    );

    const userInfo = await this.uaepassService.getUserInfo(accessToken);

    return await this.oauthService.generateCode({
      provider: OAuthProvider.UAEPASS,
      uid: userInfo.sub,
      otherData: {
        fullnameAR: userInfo.fullnameAR,
        gender: userInfo.gender,
        mobile: userInfo.mobile,
        lastnameEN: userInfo.lastnameEN,
        fullnameEN: userInfo.fullnameEN,
        uuid: userInfo.uuid,
        lastnameAR: userInfo.lastnameAR,
        idn: userInfo.idn,
        nationalityEN: userInfo.nationalityEN,
        firstnameEN: userInfo.firstnameEN,
        userType: userInfo.userType,
        nationalityAR: userInfo.nationalityAR,
        firstnameAR: userInfo.firstnameAR,
        email: userInfo.email,
      },
    });
  }
}
