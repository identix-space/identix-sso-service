import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OAuthCodeCreateWithoutOAuthConnectionInput } from './o-auth-code-create-without-o-auth-connection.input';
import { Type } from 'class-transformer';
import { OAuthCodeCreateOrConnectWithoutOAuthConnectionInput } from './o-auth-code-create-or-connect-without-o-auth-connection.input';
import { OAuthCodeCreateManyOAuthConnectionInputEnvelope } from './o-auth-code-create-many-o-auth-connection-input-envelope.input';
import { OAuthCodeWhereUniqueInput } from './o-auth-code-where-unique.input';

@InputType()
export class OAuthCodeCreateNestedManyWithoutOAuthConnectionInput {

    @Field(() => [OAuthCodeCreateWithoutOAuthConnectionInput], {nullable:true})
    @Type(() => OAuthCodeCreateWithoutOAuthConnectionInput)
    create?: Array<OAuthCodeCreateWithoutOAuthConnectionInput>;

    @Field(() => [OAuthCodeCreateOrConnectWithoutOAuthConnectionInput], {nullable:true})
    @Type(() => OAuthCodeCreateOrConnectWithoutOAuthConnectionInput)
    connectOrCreate?: Array<OAuthCodeCreateOrConnectWithoutOAuthConnectionInput>;

    @Field(() => OAuthCodeCreateManyOAuthConnectionInputEnvelope, {nullable:true})
    @Type(() => OAuthCodeCreateManyOAuthConnectionInputEnvelope)
    createMany?: OAuthCodeCreateManyOAuthConnectionInputEnvelope;

    @Field(() => [OAuthCodeWhereUniqueInput], {nullable:true})
    @Type(() => OAuthCodeWhereUniqueInput)
    connect?: Array<OAuthCodeWhereUniqueInput>;
}
