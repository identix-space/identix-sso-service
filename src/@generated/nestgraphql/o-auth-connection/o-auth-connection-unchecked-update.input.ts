import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { OAuthProvider } from '../prisma/o-auth-provider.enum';
import { OAuthCodeUncheckedUpdateManyWithoutOAuthConnectionNestedInput } from '../o-auth-code/o-auth-code-unchecked-update-many-without-o-auth-connection-nested.input';

@InputType()
export class OAuthConnectionUncheckedUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:true})
    accountId?: number;

    @Field(() => OAuthProvider, {nullable:true})
    provider?: keyof typeof OAuthProvider;

    @Field(() => String, {nullable:true})
    uid?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    avatar?: string;

    @Field(() => OAuthCodeUncheckedUpdateManyWithoutOAuthConnectionNestedInput, {nullable:true})
    oAuthCodes?: OAuthCodeUncheckedUpdateManyWithoutOAuthConnectionNestedInput;
}
