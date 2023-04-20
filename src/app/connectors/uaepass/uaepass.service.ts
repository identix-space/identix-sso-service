// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable camelcase */
import { Injectable } from '@nestjs/common';
import axios from 'axios';

interface TokenPair {
  accessToken: string;
  refreshToken: string | undefined;
}

interface UserInfo {
  sub: string;
  fullnameAR: string;
  gender: string;
  mobile: string;
  lastnameEN: string;
  fullnameEN: string;
  uuid: string;
  lastnameAR: string;
  idn: string;
  nationalityEN: string;
  firstnameEN: string;
  userType: string;
  nationalityAR: string;
  firstnameAR: string;
  email: string;
}

@Injectable()
export class UaepassService {
  public generateUrl(redirectUri: string): string {
    // https://stg-id.uaepass.ae/idshub/authorize?response_type=code&client_id=sandbox_stage&scope=urn:uae:digitalid:profile:general&state=HnlHOJTkTb66Y5H&redirect_uri=https://stg-selfcare.uaepass.ae&acr_values=urn:safelayer:tws:policies:authentication:level:low
    const domain = process.env.UAEPASS_DOMAIN;
    const clientId = process.env.UAEPASS_CLIENT_ID;
    const responseType = 'code';
    const scope = 'urn:uae:digitalid:profile:general';
    const acrValues = 'urn:safelayer:tws:policies:authentication:level:low';

    return `https://${domain}/idshub/authorize?response_type=${responseType}&client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}&acr_values=${acrValues}`;
  }

  public async getTokens(
    code: string,
    redirectUri: string,
  ): Promise<TokenPair> {
    const domain = process.env.UAEPASS_DOMAIN;
    const clientId = process.env.UAEPASS_CLIENT_ID;
    const clientSecret = process.env.UAEPASS_CLIENT_SECRET;

    const url = `https://${domain}/idshub/token`;

    const data = {
      grant_type: 'authorization_code',
      code,
      redirect_uri: redirectUri,
      client_id: clientId,
      client_secret: clientSecret,
    };

    const response = await axios.post(url, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    const { access_token } = response.data;

    return {
      accessToken: access_token,
      refreshToken: undefined,
    };
  }

  public async getUserInfo(accessToken: string): Promise<UserInfo> {
    const domain = process.env.UAEPASS_DOMAIN;

    const url = `https://${domain}/idshub/userinfo`;

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  }
}
