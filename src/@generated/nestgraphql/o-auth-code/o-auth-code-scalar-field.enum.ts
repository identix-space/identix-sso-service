import { registerEnumType } from '@nestjs/graphql';

export enum OAuthCodeScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    code = "code",
    expiresAt = "expiresAt",
    oAuthConnectionId = "oAuthConnectionId"
}


registerEnumType(OAuthCodeScalarFieldEnum, { name: 'OAuthCodeScalarFieldEnum', description: undefined })
