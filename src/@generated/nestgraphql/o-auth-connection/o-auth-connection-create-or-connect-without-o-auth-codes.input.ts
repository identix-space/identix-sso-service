import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OAuthConnectionWhereUniqueInput } from './o-auth-connection-where-unique.input';
import { Type } from 'class-transformer';
import { OAuthConnectionCreateWithoutOAuthCodesInput } from './o-auth-connection-create-without-o-auth-codes.input';

@InputType()
export class OAuthConnectionCreateOrConnectWithoutOAuthCodesInput {

    @Field(() => OAuthConnectionWhereUniqueInput, {nullable:false})
    @Type(() => OAuthConnectionWhereUniqueInput)
    where!: OAuthConnectionWhereUniqueInput;

    @Field(() => OAuthConnectionCreateWithoutOAuthCodesInput, {nullable:false})
    @Type(() => OAuthConnectionCreateWithoutOAuthCodesInput)
    create!: OAuthConnectionCreateWithoutOAuthCodesInput;
}
