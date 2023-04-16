import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountUpdateWithoutConnectionsInput } from './account-update-without-connections.input';
import { Type } from 'class-transformer';
import { AccountCreateWithoutConnectionsInput } from './account-create-without-connections.input';

@InputType()
export class AccountUpsertWithoutConnectionsInput {

    @Field(() => AccountUpdateWithoutConnectionsInput, {nullable:false})
    @Type(() => AccountUpdateWithoutConnectionsInput)
    update!: AccountUpdateWithoutConnectionsInput;

    @Field(() => AccountCreateWithoutConnectionsInput, {nullable:false})
    @Type(() => AccountCreateWithoutConnectionsInput)
    create!: AccountCreateWithoutConnectionsInput;
}
