import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AccountRole } from '../prisma/account-role.enum';
import { AccountStatus } from '../prisma/account-status.enum';
import { AccountSessionUncheckedUpdateManyWithoutAccountNestedInput } from '../account-session/account-session-unchecked-update-many-without-account-nested.input';

@InputType()
export class AccountUncheckedUpdateWithoutConnectionsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => [AccountRole], {nullable:true})
    roles?: Array<keyof typeof AccountRole>;

    @Field(() => AccountStatus, {nullable:true})
    status?: keyof typeof AccountStatus;

    @Field(() => String, {nullable:true})
    avatarUrl?: string;

    @Field(() => String, {nullable:true})
    did?: string;

    @Field(() => AccountSessionUncheckedUpdateManyWithoutAccountNestedInput, {nullable:true})
    sessions?: AccountSessionUncheckedUpdateManyWithoutAccountNestedInput;
}
