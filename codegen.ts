import process from 'node:process';

import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  require: ['ts-node/register'],
  overwrite: true,
  generates: {
    'src/@generated/wallet-service-client.ts': {
      schema: [
        {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          [process.env.WALLETS_SERVICE_URL!]: {
            headers: {
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              Authorization: process.env.WALLETS_SERVICE_ACCESS_TOKEN!,
            },
          },
        },
      ],
      documents: 'src/app/wallets-service-client/queries.graphql',
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-graphql-request',
        {
          add: {
            content: ['/* eslint-disable */', '// @ts-nocheck'],
          },
        },
      ],
    },
  },
};

export default config;
