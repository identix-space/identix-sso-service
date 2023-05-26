import process from 'node:process';

import { Injectable } from '@nestjs/common';
import { GraphQLClient } from 'graphql-request';

import { OAuthProvider } from '@/@generated/nestgraphql/prisma/o-auth-provider.enum';
import {
  getSdk,
  Sdk,
  Web2AuthenticationMethods,
} from '@/@generated/wallet-service-client';
import { Logger } from '@/common/logger/logger';

interface CreateDidInput {
  provider: OAuthProvider;
  userId: string;
}

@Injectable()
export class WalletsServiceClientService {
  private readonly sdk: Sdk;

  constructor(private readonly logger: Logger) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.sdk = getSdk(new GraphQLClient(process.env.WALLETS_SERVICE_URL!));
  }

  async createDid(data: CreateDidInput): Promise<string> {
    this.logger.debug(
      `Create DID for ${data.provider} user with ID: ${data.userId}`,
    );

    const response = await this.sdk.GetOrCreateAccount(
      {
        params: {
          web2: {
            method: Web2AuthenticationMethods.ClientId, // todo change to UAEPASS when it stay possible
            identifier: data.userId,
          },
        },
      },
      {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        Authorization: process.env.WALLETS_SERVICE_ACCESS_TOKEN!,
      },
    );
    this.logger.debug('Create DID response:', response);

    if (
      response.getOrCreateAccount.dids.length === 0 ||
      !response.getOrCreateAccount.dids[0]
    ) {
      throw new Error('No DID returned');
    }

    return response.getOrCreateAccount.dids[0];
  }

  async deleteAccountByDid(accountDid: string): Promise<boolean> {
    this.logger.debug(`Delete account by DID: ${accountDid}`);

    const response = await this.sdk.DeleteAccountByDid(
      {
        accountDid,
      },
      {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        Authorization: process.env.WALLETS_SERVICE_ACCESS_TOKEN!,
      },
    );
    this.logger.debug('Delete account response:', response);

    return response.deleteAccountByDid;
  }
}
