import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OAuthCodeWhereUniqueInput } from './o-auth-code-where-unique.input';
import { Type } from 'class-transformer';
import { OAuthCodeUpdateWithoutOAuthConnectionInput } from './o-auth-code-update-without-o-auth-connection.input';

@InputType()
export class OAuthCodeUpdateWithWhereUniqueWithoutOAuthConnectionInput {

    @Field(() => OAuthCodeWhereUniqueInput, {nullable:false})
    @Type(() => OAuthCodeWhereUniqueInput)
    where!: OAuthCodeWhereUniqueInput;

    @Field(() => OAuthCodeUpdateWithoutOAuthConnectionInput, {nullable:false})
    @Type(() => OAuthCodeUpdateWithoutOAuthConnectionInput)
    data!: OAuthCodeUpdateWithoutOAuthConnectionInput;
}
