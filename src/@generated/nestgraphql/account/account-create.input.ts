import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountRole } from '../prisma/account-role.enum';
import { AccountStatus } from '../prisma/account-status.enum';
import { AccountSessionCreateNestedManyWithoutAccountInput } from '../account-session/account-session-create-nested-many-without-account.input';
import { OAuthConnectionCreateNestedManyWithoutAccountInput } from '../o-auth-connection/o-auth-connection-create-nested-many-without-account.input';

@InputType()
export class AccountCreateInput {

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

    @Field(() => AccountSessionCreateNestedManyWithoutAccountInput, {nullable:true})
    sessions?: AccountSessionCreateNestedManyWithoutAccountInput;

    @Field(() => OAuthConnectionCreateNestedManyWithoutAccountInput, {nullable:true})
    connections?: OAuthConnectionCreateNestedManyWithoutAccountInput;
}
