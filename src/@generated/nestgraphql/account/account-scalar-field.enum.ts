import { registerEnumType } from '@nestjs/graphql';

export enum AccountScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    roles = "roles",
    status = "status",
    avatarUrl = "avatarUrl",
    did = "did"
}


registerEnumType(AccountScalarFieldEnum, { name: 'AccountScalarFieldEnum', description: undefined })
