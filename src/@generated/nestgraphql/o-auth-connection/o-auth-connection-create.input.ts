import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OAuthProvider } from '../prisma/o-auth-provider.enum';
import { GraphQLJSON } from 'graphql-type-json';
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

    @Field(() => GraphQLJSON, {nullable:false})
    otherData!: any;

    @Field(() => AccountCreateNestedOneWithoutConnectionsInput, {nullable:false})
    account!: AccountCreateNestedOneWithoutConnectionsInput;

    @Field(() => OAuthCodeCreateNestedManyWithoutOAuthConnectionInput, {nullable:true})
    oAuthCodes?: OAuthCodeCreateNestedManyWithoutOAuthConnectionInput;
}
