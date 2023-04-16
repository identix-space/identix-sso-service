import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OAuthConnectionWhereUniqueInput } from './o-auth-connection-where-unique.input';
import { Type } from 'class-transformer';
import { OAuthConnectionUpdateWithoutAccountInput } from './o-auth-connection-update-without-account.input';
import { OAuthConnectionCreateWithoutAccountInput } from './o-auth-connection-create-without-account.input';

@InputType()
export class OAuthConnectionUpsertWithWhereUniqueWithoutAccountInput {

    @Field(() => OAuthConnectionWhereUniqueInput, {nullable:false})
    @Type(() => OAuthConnectionWhereUniqueInput)
    where!: OAuthConnectionWhereUniqueInput;

    @Field(() => OAuthConnectionUpdateWithoutAccountInput, {nullable:false})
    @Type(() => OAuthConnectionUpdateWithoutAccountInput)
    update!: OAuthConnectionUpdateWithoutAccountInput;

    @Field(() => OAuthConnectionCreateWithoutAccountInput, {nullable:false})
    @Type(() => OAuthConnectionCreateWithoutAccountInput)
    create!: OAuthConnectionCreateWithoutAccountInput;
}
