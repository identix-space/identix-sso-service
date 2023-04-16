import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OAuthConnectionCreateWithoutAccountInput } from './o-auth-connection-create-without-account.input';
import { Type } from 'class-transformer';
import { OAuthConnectionCreateOrConnectWithoutAccountInput } from './o-auth-connection-create-or-connect-without-account.input';
import { OAuthConnectionCreateManyAccountInputEnvelope } from './o-auth-connection-create-many-account-input-envelope.input';
import { OAuthConnectionWhereUniqueInput } from './o-auth-connection-where-unique.input';

@InputType()
export class OAuthConnectionCreateNestedManyWithoutAccountInput {

    @Field(() => [OAuthConnectionCreateWithoutAccountInput], {nullable:true})
    @Type(() => OAuthConnectionCreateWithoutAccountInput)
    create?: Array<OAuthConnectionCreateWithoutAccountInput>;

    @Field(() => [OAuthConnectionCreateOrConnectWithoutAccountInput], {nullable:true})
    @Type(() => OAuthConnectionCreateOrConnectWithoutAccountInput)
    connectOrCreate?: Array<OAuthConnectionCreateOrConnectWithoutAccountInput>;

    @Field(() => OAuthConnectionCreateManyAccountInputEnvelope, {nullable:true})
    @Type(() => OAuthConnectionCreateManyAccountInputEnvelope)
    createMany?: OAuthConnectionCreateManyAccountInputEnvelope;

    @Field(() => [OAuthConnectionWhereUniqueInput], {nullable:true})
    @Type(() => OAuthConnectionWhereUniqueInput)
    connect?: Array<OAuthConnectionWhereUniqueInput>;
}
