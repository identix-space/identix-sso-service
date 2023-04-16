import { registerEnumType } from '@nestjs/graphql';

export enum OAuthConnectionScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    accountId = "accountId",
    provider = "provider",
    uid = "uid",
    email = "email",
    name = "name",
    avatar = "avatar"
}


registerEnumType(OAuthConnectionScalarFieldEnum, { name: 'OAuthConnectionScalarFieldEnum', description: undefined })
