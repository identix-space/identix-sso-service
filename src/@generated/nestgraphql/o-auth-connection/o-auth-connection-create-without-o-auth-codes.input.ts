import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OAuthProvider } from '../prisma/o-auth-provider.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { AccountCreateNestedOneWithoutConnectionsInput } from '../account/account-create-nested-one-without-connections.input';

@InputType()
export class OAuthConnectionCreateWithoutOAuthCodesInput {

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
}
