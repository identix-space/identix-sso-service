import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OAuthConnectionWhereUniqueInput } from './o-auth-connection-where-unique.input';
import { Type } from 'class-transformer';
import { OAuthConnectionCreateWithoutAccountInput } from './o-auth-connection-create-without-account.input';

@InputType()
export class OAuthConnectionCreateOrConnectWithoutAccountInput {

    @Field(() => OAuthConnectionWhereUniqueInput, {nullable:false})
    @Type(() => OAuthConnectionWhereUniqueInput)
    where!: OAuthConnectionWhereUniqueInput;

    @Field(() => OAuthConnectionCreateWithoutAccountInput, {nullable:false})
    @Type(() => OAuthConnectionCreateWithoutAccountInput)
    create!: OAuthConnectionCreateWithoutAccountInput;
}
