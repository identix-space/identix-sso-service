import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OAuthCodeWhereUniqueInput } from './o-auth-code-where-unique.input';
import { Type } from 'class-transformer';
import { OAuthCodeUpdateWithoutOAuthConnectionInput } from './o-auth-code-update-without-o-auth-connection.input';
import { OAuthCodeCreateWithoutOAuthConnectionInput } from './o-auth-code-create-without-o-auth-connection.input';

@InputType()
export class OAuthCodeUpsertWithWhereUniqueWithoutOAuthConnectionInput {

    @Field(() => OAuthCodeWhereUniqueInput, {nullable:false})
    @Type(() => OAuthCodeWhereUniqueInput)
    where!: OAuthCodeWhereUniqueInput;

    @Field(() => OAuthCodeUpdateWithoutOAuthConnectionInput, {nullable:false})
    @Type(() => OAuthCodeUpdateWithoutOAuthConnectionInput)
    update!: OAuthCodeUpdateWithoutOAuthConnectionInput;

    @Field(() => OAuthCodeCreateWithoutOAuthConnectionInput, {nullable:false})
    @Type(() => OAuthCodeCreateWithoutOAuthConnectionInput)
    create!: OAuthCodeCreateWithoutOAuthConnectionInput;
}
