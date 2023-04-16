import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OAuthConnectionUpdateWithoutOAuthCodesInput } from './o-auth-connection-update-without-o-auth-codes.input';
import { Type } from 'class-transformer';
import { OAuthConnectionCreateWithoutOAuthCodesInput } from './o-auth-connection-create-without-o-auth-codes.input';

@InputType()
export class OAuthConnectionUpsertWithoutOAuthCodesInput {

    @Field(() => OAuthConnectionUpdateWithoutOAuthCodesInput, {nullable:false})
    @Type(() => OAuthConnectionUpdateWithoutOAuthCodesInput)
    update!: OAuthConnectionUpdateWithoutOAuthCodesInput;

    @Field(() => OAuthConnectionCreateWithoutOAuthCodesInput, {nullable:false})
    @Type(() => OAuthConnectionCreateWithoutOAuthCodesInput)
    create!: OAuthConnectionCreateWithoutOAuthCodesInput;
}
