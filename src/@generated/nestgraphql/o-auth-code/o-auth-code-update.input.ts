import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OAuthConnectionUpdateOneRequiredWithoutOAuthCodesNestedInput } from '../o-auth-connection/o-auth-connection-update-one-required-without-o-auth-codes-nested.input';

@InputType()
export class OAuthCodeUpdateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    code?: string;

    @Field(() => String, {nullable:true})
    state?: string;

    @Field(() => Date, {nullable:true})
    expiresAt?: Date | string;

    @Field(() => OAuthConnectionUpdateOneRequiredWithoutOAuthCodesNestedInput, {nullable:true})
    oAuthConnection?: OAuthConnectionUpdateOneRequiredWithoutOAuthCodesNestedInput;
}
