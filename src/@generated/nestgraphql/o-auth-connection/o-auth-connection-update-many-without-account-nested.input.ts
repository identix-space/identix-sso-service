import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OAuthConnectionCreateWithoutAccountInput } from './o-auth-connection-create-without-account.input';
import { Type } from 'class-transformer';
import { OAuthConnectionCreateOrConnectWithoutAccountInput } from './o-auth-connection-create-or-connect-without-account.input';
import { OAuthConnectionUpsertWithWhereUniqueWithoutAccountInput } from './o-auth-connection-upsert-with-where-unique-without-account.input';
import { OAuthConnectionCreateManyAccountInputEnvelope } from './o-auth-connection-create-many-account-input-envelope.input';
import { OAuthConnectionWhereUniqueInput } from './o-auth-connection-where-unique.input';
import { OAuthConnectionUpdateWithWhereUniqueWithoutAccountInput } from './o-auth-connection-update-with-where-unique-without-account.input';
import { OAuthConnectionUpdateManyWithWhereWithoutAccountInput } from './o-auth-connection-update-many-with-where-without-account.input';
import { OAuthConnectionScalarWhereInput } from './o-auth-connection-scalar-where.input';

@InputType()
export class OAuthConnectionUpdateManyWithoutAccountNestedInput {

    @Field(() => [OAuthConnectionCreateWithoutAccountInput], {nullable:true})
    @Type(() => OAuthConnectionCreateWithoutAccountInput)
    create?: Array<OAuthConnectionCreateWithoutAccountInput>;

    @Field(() => [OAuthConnectionCreateOrConnectWithoutAccountInput], {nullable:true})
    @Type(() => OAuthConnectionCreateOrConnectWithoutAccountInput)
    connectOrCreate?: Array<OAuthConnectionCreateOrConnectWithoutAccountInput>;

    @Field(() => [OAuthConnectionUpsertWithWhereUniqueWithoutAccountInput], {nullable:true})
    @Type(() => OAuthConnectionUpsertWithWhereUniqueWithoutAccountInput)
    upsert?: Array<OAuthConnectionUpsertWithWhereUniqueWithoutAccountInput>;

    @Field(() => OAuthConnectionCreateManyAccountInputEnvelope, {nullable:true})
    @Type(() => OAuthConnectionCreateManyAccountInputEnvelope)
    createMany?: OAuthConnectionCreateManyAccountInputEnvelope;

    @Field(() => [OAuthConnectionWhereUniqueInput], {nullable:true})
    @Type(() => OAuthConnectionWhereUniqueInput)
    set?: Array<OAuthConnectionWhereUniqueInput>;

    @Field(() => [OAuthConnectionWhereUniqueInput], {nullable:true})
    @Type(() => OAuthConnectionWhereUniqueInput)
    disconnect?: Array<OAuthConnectionWhereUniqueInput>;

    @Field(() => [OAuthConnectionWhereUniqueInput], {nullable:true})
    @Type(() => OAuthConnectionWhereUniqueInput)
    delete?: Array<OAuthConnectionWhereUniqueInput>;

    @Field(() => [OAuthConnectionWhereUniqueInput], {nullable:true})
    @Type(() => OAuthConnectionWhereUniqueInput)
    connect?: Array<OAuthConnectionWhereUniqueInput>;

    @Field(() => [OAuthConnectionUpdateWithWhereUniqueWithoutAccountInput], {nullable:true})
    @Type(() => OAuthConnectionUpdateWithWhereUniqueWithoutAccountInput)
    update?: Array<OAuthConnectionUpdateWithWhereUniqueWithoutAccountInput>;

    @Field(() => [OAuthConnectionUpdateManyWithWhereWithoutAccountInput], {nullable:true})
    @Type(() => OAuthConnectionUpdateManyWithWhereWithoutAccountInput)
    updateMany?: Array<OAuthConnectionUpdateManyWithWhereWithoutAccountInput>;

    @Field(() => [OAuthConnectionScalarWhereInput], {nullable:true})
    @Type(() => OAuthConnectionScalarWhereInput)
    deleteMany?: Array<OAuthConnectionScalarWhereInput>;
}
