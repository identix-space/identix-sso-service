import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

import { OAuthProvider } from '@/@generated/nestgraphql/prisma/o-auth-provider.enum';
import { RequestContext } from '@/app/auth/request-context-extractor/interfaces';
import {
  CryptoService,
  RandomStringType,
} from '@/common/crypto/crypto.service';
import { PrismaService } from '@/common/prisma/prisma.service';

@Injectable()
export class RequestContextExtractorMiddleware implements NestMiddleware {
  constructor(
    private readonly prisma: PrismaService,
    private readonly cryptoService: CryptoService,
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async use(request: Request | any, response: Response, next: NextFunction) {
    const token = request.headers.authorization;

    const requestContext: RequestContext = {
      req: request,
      res: response,
      account: undefined,
      accountSession: undefined,
    };

    if (token) {
      const session = await this.prisma.accountSession.findUnique({
        where: {
          token,
        },
        include: {
          account: {
            include: {
              connections: true,
            },
          },
        },
      });

      if (session) {
        requestContext.account = session.account;
        requestContext.accountSession = session;
      }
    }

    // temporary hack: add random real estate id if it's not there
    if (requestContext.account?.connections?.length) {
      const newConnections = [];
      for (const connection of requestContext.account.connections) {
        if (
          connection.provider === OAuthProvider.UAEPASS &&
          !connection.otherData.idn
        ) {
          connection.otherData.idn =
            await this.cryptoService.generateRandomString(
              RandomStringType.FAKE_IDN,
            );
        }
        newConnections.push(connection);
      }
      requestContext.account.connections = newConnections;
    }

    request.requestContext = requestContext;
    next();
  }
}
