import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OAuthCodeCreateWithoutOAuthConnectionInput } from './o-auth-code-create-without-o-auth-connection.input';
import { Type } from 'class-transformer';
import { OAuthCodeCreateOrConnectWithoutOAuthConnectionInput } from './o-auth-code-create-or-connect-without-o-auth-connection.input';
import { OAuthCodeUpsertWithWhereUniqueWithoutOAuthConnectionInput } from './o-auth-code-upsert-with-where-unique-without-o-auth-connection.input';
import { OAuthCodeCreateManyOAuthConnectionInputEnvelope } from './o-auth-code-create-many-o-auth-connection-input-envelope.input';
import { OAuthCodeWhereUniqueInput } from './o-auth-code-where-unique.input';
import { OAuthCodeUpdateWithWhereUniqueWithoutOAuthConnectionInput } from './o-auth-code-update-with-where-unique-without-o-auth-connection.input';
import { OAuthCodeUpdateManyWithWhereWithoutOAuthConnectionInput } from './o-auth-code-update-many-with-where-without-o-auth-connection.input';
import { OAuthCodeScalarWhereInput } from './o-auth-code-scalar-where.input';

@InputType()
export class OAuthCodeUncheckedUpdateManyWithoutOAuthConnectionNestedInput {

    @Field(() => [OAuthCodeCreateWithoutOAuthConnectionInput], {nullable:true})
    @Type(() => OAuthCodeCreateWithoutOAuthConnectionInput)
    create?: Array<OAuthCodeCreateWithoutOAuthConnectionInput>;

    @Field(() => [OAuthCodeCreateOrConnectWithoutOAuthConnectionInput], {nullable:true})
    @Type(() => OAuthCodeCreateOrConnectWithoutOAuthConnectionInput)
    connectOrCreate?: Array<OAuthCodeCreateOrConnectWithoutOAuthConnectionInput>;

    @Field(() => [OAuthCodeUpsertWithWhereUniqueWithoutOAuthConnectionInput], {nullable:true})
    @Type(() => OAuthCodeUpsertWithWhereUniqueWithoutOAuthConnectionInput)
    upsert?: Array<OAuthCodeUpsertWithWhereUniqueWithoutOAuthConnectionInput>;

    @Field(() => OAuthCodeCreateManyOAuthConnectionInputEnvelope, {nullable:true})
    @Type(() => OAuthCodeCreateManyOAuthConnectionInputEnvelope)
    createMany?: OAuthCodeCreateManyOAuthConnectionInputEnvelope;

    @Field(() => [OAuthCodeWhereUniqueInput], {nullable:true})
    @Type(() => OAuthCodeWhereUniqueInput)
    set?: Array<OAuthCodeWhereUniqueInput>;

    @Field(() => [OAuthCodeWhereUniqueInput], {nullable:true})
    @Type(() => OAuthCodeWhereUniqueInput)
    disconnect?: Array<OAuthCodeWhereUniqueInput>;

    @Field(() => [OAuthCodeWhereUniqueInput], {nullable:true})
    @Type(() => OAuthCodeWhereUniqueInput)
    delete?: Array<OAuthCodeWhereUniqueInput>;

    @Field(() => [OAuthCodeWhereUniqueInput], {nullable:true})
    @Type(() => OAuthCodeWhereUniqueInput)
    connect?: Array<OAuthCodeWhereUniqueInput>;

    @Field(() => [OAuthCodeUpdateWithWhereUniqueWithoutOAuthConnectionInput], {nullable:true})
    @Type(() => OAuthCodeUpdateWithWhereUniqueWithoutOAuthConnectionInput)
    update?: Array<OAuthCodeUpdateWithWhereUniqueWithoutOAuthConnectionInput>;

    @Field(() => [OAuthCodeUpdateManyWithWhereWithoutOAuthConnectionInput], {nullable:true})
    @Type(() => OAuthCodeUpdateManyWithWhereWithoutOAuthConnectionInput)
    updateMany?: Array<OAuthCodeUpdateManyWithWhereWithoutOAuthConnectionInput>;

    @Field(() => [OAuthCodeScalarWhereInput], {nullable:true})
    @Type(() => OAuthCodeScalarWhereInput)
    deleteMany?: Array<OAuthCodeScalarWhereInput>;
}
