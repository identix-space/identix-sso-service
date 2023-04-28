import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AccountRole } from '../prisma/account-role.enum';
import { AccountStatus } from '../prisma/account-status.enum';
import { OAuthConnectionUncheckedCreateNestedManyWithoutAccountInput } from '../o-auth-connection/o-auth-connection-unchecked-create-nested-many-without-account.input';

@InputType()
export class AccountUncheckedCreateWithoutSessionsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => [AccountRole], {nullable:true})
    roles?: Array<keyof typeof AccountRole>;

    @Field(() => AccountStatus, {nullable:false})
    status!: keyof typeof AccountStatus;

    @Field(() => String, {nullable:true})
    avatarUrl?: string;

    @Field(() => String, {nullable:false})
    did!: string;

    @Field(() => OAuthConnectionUncheckedCreateNestedManyWithoutAccountInput, {nullable:true})
    connections?: OAuthConnectionUncheckedCreateNestedManyWithoutAccountInput;
}
