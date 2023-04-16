import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OAuthProvider } from '../prisma/o-auth-provider.enum';
import { AccountCreateNestedOneWithoutConnectionsInput } from '../account/account-create-nested-one-without-connections.input';
import { OAuthCodeCreateNestedManyWithoutOAuthConnectionInput } from '../o-auth-code/o-auth-code-create-nested-many-without-o-auth-connection.input';

@InputType()
export class OAuthConnectionCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => OAuthProvider, {nullable:false})
    provider!: keyof typeof OAuthProvider;

    @Field(() => String, {nullable:false})
    uid!: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    avatar?: string;

    @Field(() => AccountCreateNestedOneWithoutConnectionsInput, {nullable:false})
    account!: AccountCreateNestedOneWithoutConnectionsInput;

    @Field(() => OAuthCodeCreateNestedManyWithoutOAuthConnectionInput, {nullable:true})
    oAuthCodes?: OAuthCodeCreateNestedManyWithoutOAuthConnectionInput;
}
