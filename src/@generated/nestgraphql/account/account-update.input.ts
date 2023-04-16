import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountRole } from '../prisma/account-role.enum';
import { AccountStatus } from '../prisma/account-status.enum';
import { AccountSessionUpdateManyWithoutAccountNestedInput } from '../account-session/account-session-update-many-without-account-nested.input';
import { OAuthConnectionUpdateManyWithoutAccountNestedInput } from '../o-auth-connection/o-auth-connection-update-many-without-account-nested.input';

@InputType()
export class AccountUpdateInput {

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

    @Field(() => AccountSessionUpdateManyWithoutAccountNestedInput, {nullable:true})
    sessions?: AccountSessionUpdateManyWithoutAccountNestedInput;

    @Field(() => OAuthConnectionUpdateManyWithoutAccountNestedInput, {nullable:true})
    connections?: OAuthConnectionUpdateManyWithoutAccountNestedInput;
}
