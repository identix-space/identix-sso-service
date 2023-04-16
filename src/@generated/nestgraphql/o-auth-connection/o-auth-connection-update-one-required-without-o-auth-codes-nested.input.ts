import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OAuthConnectionCreateWithoutOAuthCodesInput } from './o-auth-connection-create-without-o-auth-codes.input';
import { Type } from 'class-transformer';
import { OAuthConnectionCreateOrConnectWithoutOAuthCodesInput } from './o-auth-connection-create-or-connect-without-o-auth-codes.input';
import { OAuthConnectionUpsertWithoutOAuthCodesInput } from './o-auth-connection-upsert-without-o-auth-codes.input';
import { OAuthConnectionWhereUniqueInput } from './o-auth-connection-where-unique.input';
import { OAuthConnectionUpdateWithoutOAuthCodesInput } from './o-auth-connection-update-without-o-auth-codes.input';

@InputType()
export class OAuthConnectionUpdateOneRequiredWithoutOAuthCodesNestedInput {

    @Field(() => OAuthConnectionCreateWithoutOAuthCodesInput, {nullable:true})
    @Type(() => OAuthConnectionCreateWithoutOAuthCodesInput)
    create?: OAuthConnectionCreateWithoutOAuthCodesInput;

    @Field(() => OAuthConnectionCreateOrConnectWithoutOAuthCodesInput, {nullable:true})
    @Type(() => OAuthConnectionCreateOrConnectWithoutOAuthCodesInput)
    connectOrCreate?: OAuthConnectionCreateOrConnectWithoutOAuthCodesInput;

    @Field(() => OAuthConnectionUpsertWithoutOAuthCodesInput, {nullable:true})
    @Type(() => OAuthConnectionUpsertWithoutOAuthCodesInput)
    upsert?: OAuthConnectionUpsertWithoutOAuthCodesInput;

    @Field(() => OAuthConnectionWhereUniqueInput, {nullable:true})
    @Type(() => OAuthConnectionWhereUniqueInput)
    connect?: OAuthConnectionWhereUniqueInput;

    @Field(() => OAuthConnectionUpdateWithoutOAuthCodesInput, {nullable:true})
    @Type(() => OAuthConnectionUpdateWithoutOAuthCodesInput)
    update?: OAuthConnectionUpdateWithoutOAuthCodesInput;
}
