import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OAuthConnectionWhereUniqueInput } from './o-auth-connection-where-unique.input';
import { Type } from 'class-transformer';
import { OAuthConnectionUpdateWithoutAccountInput } from './o-auth-connection-update-without-account.input';

@InputType()
export class OAuthConnectionUpdateWithWhereUniqueWithoutAccountInput {

    @Field(() => OAuthConnectionWhereUniqueInput, {nullable:false})
    @Type(() => OAuthConnectionWhereUniqueInput)
    where!: OAuthConnectionWhereUniqueInput;

    @Field(() => OAuthConnectionUpdateWithoutAccountInput, {nullable:false})
    @Type(() => OAuthConnectionUpdateWithoutAccountInput)
    data!: OAuthConnectionUpdateWithoutAccountInput;
}
