import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountWhereUniqueInput } from './account-where-unique.input';
import { Type } from 'class-transformer';
import { AccountCreateWithoutConnectionsInput } from './account-create-without-connections.input';

@InputType()
export class AccountCreateOrConnectWithoutConnectionsInput {

    @Field(() => AccountWhereUniqueInput, {nullable:false})
    @Type(() => AccountWhereUniqueInput)
    where!: AccountWhereUniqueInput;

    @Field(() => AccountCreateWithoutConnectionsInput, {nullable:false})
    @Type(() => AccountCreateWithoutConnectionsInput)
    create!: AccountCreateWithoutConnectionsInput;
}
