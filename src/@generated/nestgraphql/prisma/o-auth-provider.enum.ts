import { registerEnumType } from '@nestjs/graphql';

export enum OAuthProvider {
    AUTH0 = "AUTH0"
}


registerEnumType(OAuthProvider, { name: 'OAuthProvider', description: undefined })
