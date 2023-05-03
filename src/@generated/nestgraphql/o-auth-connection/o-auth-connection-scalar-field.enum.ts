import { registerEnumType } from '@nestjs/graphql';

export enum OAuthConnectionScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    accountId = "accountId",
    provider = "provider",
    uid = "uid",
    otherData = "otherData"
}


registerEnumType(OAuthConnectionScalarFieldEnum, { name: 'OAuthConnectionScalarFieldEnum', description: undefined })
