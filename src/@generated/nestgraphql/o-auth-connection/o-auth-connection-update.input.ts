import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OAuthProvider } from '../prisma/o-auth-provider.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { AccountUpdateOneRequiredWithoutConnectionsNestedInput } from '../account/account-update-one-required-without-connections-nested.input';
import { OAuthCodeUpdateManyWithoutOAuthConnectionNestedInput } from '../o-auth-code/o-auth-code-update-many-without-o-auth-connection-nested.input';

@InputType()
export class OAuthConnectionUpdateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => OAuthProvider, {nullable:true})
    provider?: keyof typeof OAuthProvider;

    @Field(() => String, {nullable:true})
    uid?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    otherData?: any;

    @Field(() => AccountUpdateOneRequiredWithoutConnectionsNestedInput, {nullable:true})
    account?: AccountUpdateOneRequiredWithoutConnectionsNestedInput;

    @Field(() => OAuthCodeUpdateManyWithoutOAuthConnectionNestedInput, {nullable:true})
    oAuthCodes?: OAuthCodeUpdateManyWithoutOAuthConnectionNestedInput;
}
