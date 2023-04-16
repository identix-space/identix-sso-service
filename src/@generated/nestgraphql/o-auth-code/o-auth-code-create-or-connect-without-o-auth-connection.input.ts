import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OAuthCodeWhereUniqueInput } from './o-auth-code-where-unique.input';
import { Type } from 'class-transformer';
import { OAuthCodeCreateWithoutOAuthConnectionInput } from './o-auth-code-create-without-o-auth-connection.input';

@InputType()
export class OAuthCodeCreateOrConnectWithoutOAuthConnectionInput {

    @Field(() => OAuthCodeWhereUniqueInput, {nullable:false})
    @Type(() => OAuthCodeWhereUniqueInput)
    where!: OAuthCodeWhereUniqueInput;

    @Field(() => OAuthCodeCreateWithoutOAuthConnectionInput, {nullable:false})
    @Type(() => OAuthCodeCreateWithoutOAuthConnectionInput)
    create!: OAuthCodeCreateWithoutOAuthConnectionInput;
}
