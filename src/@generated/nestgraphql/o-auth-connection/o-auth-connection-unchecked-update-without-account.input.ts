import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { OAuthProvider } from '../prisma/o-auth-provider.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { OAuthCodeUncheckedUpdateManyWithoutOAuthConnectionNestedInput } from '../o-auth-code/o-auth-code-unchecked-update-many-without-o-auth-connection-nested.input';

@InputType()
export class OAuthConnectionUncheckedUpdateWithoutAccountInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => OAuthCodeUncheckedUpdateManyWithoutOAuthConnectionNestedInput, {nullable:true})
    oAuthCodes?: OAuthCodeUncheckedUpdateManyWithoutOAuthConnectionNestedInput;
}
