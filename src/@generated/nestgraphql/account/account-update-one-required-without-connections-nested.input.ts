import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountCreateWithoutConnectionsInput } from './account-create-without-connections.input';
import { Type } from 'class-transformer';
import { AccountCreateOrConnectWithoutConnectionsInput } from './account-create-or-connect-without-connections.input';
import { AccountUpsertWithoutConnectionsInput } from './account-upsert-without-connections.input';
import { AccountWhereUniqueInput } from './account-where-unique.input';
import { AccountUpdateWithoutConnectionsInput } from './account-update-without-connections.input';

@InputType()
export class AccountUpdateOneRequiredWithoutConnectionsNestedInput {

    @Field(() => AccountCreateWithoutConnectionsInput, {nullable:true})
    @Type(() => AccountCreateWithoutConnectionsInput)
    create?: AccountCreateWithoutConnectionsInput;

    @Field(() => AccountCreateOrConnectWithoutConnectionsInput, {nullable:true})
    @Type(() => AccountCreateOrConnectWithoutConnectionsInput)
    connectOrCreate?: AccountCreateOrConnectWithoutConnectionsInput;

    @Field(() => AccountUpsertWithoutConnectionsInput, {nullable:true})
    @Type(() => AccountUpsertWithoutConnectionsInput)
    upsert?: AccountUpsertWithoutConnectionsInput;

    @Field(() => AccountWhereUniqueInput, {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    connect?: AccountWhereUniqueInput;

    @Field(() => AccountUpdateWithoutConnectionsInput, {nullable:true})
    @Type(() => AccountUpdateWithoutConnectionsInput)
    update?: AccountUpdateWithoutConnectionsInput;
}
