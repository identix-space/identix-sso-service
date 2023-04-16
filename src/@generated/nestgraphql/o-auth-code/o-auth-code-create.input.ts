import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OAuthConnectionCreateNestedOneWithoutOAuthCodesInput } from '../o-auth-connection/o-auth-connection-create-nested-one-without-o-auth-codes.input';

@InputType()
export class OAuthCodeCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => Date, {nullable:false})
    expiresAt!: Date | string;

    @Field(() => OAuthConnectionCreateNestedOneWithoutOAuthCodesInput, {nullable:false})
    oAuthConnection!: OAuthConnectionCreateNestedOneWithoutOAuthCodesInput;
}
