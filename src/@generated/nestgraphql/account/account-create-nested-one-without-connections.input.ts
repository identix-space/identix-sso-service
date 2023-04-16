import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountCreateWithoutConnectionsInput } from './account-create-without-connections.input';
import { Type } from 'class-transformer';
import { AccountCreateOrConnectWithoutConnectionsInput } from './account-create-or-connect-without-connections.input';
import { AccountWhereUniqueInput } from './account-where-unique.input';

@InputType()
export class AccountCreateNestedOneWithoutConnectionsInput {

    @Field(() => AccountCreateWithoutConnectionsInput, {nullable:true})
    @Type(() => AccountCreateWithoutConnectionsInput)
    create?: AccountCreateWithoutConnectionsInput;

    @Field(() => AccountCreateOrConnectWithoutConnectionsInput, {nullable:true})
    @Type(() => AccountCreateOrConnectWithoutConnectionsInput)
    connectOrCreate?: AccountCreateOrConnectWithoutConnectionsInput;

    @Field(() => AccountWhereUniqueInput, {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    connect?: AccountWhereUniqueInput;
}
