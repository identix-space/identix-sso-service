import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OAuthConnectionUpdateInput } from './o-auth-connection-update.input';
import { Type } from 'class-transformer';
import { OAuthConnectionWhereUniqueInput } from './o-auth-connection-where-unique.input';

@ArgsType()
export class UpdateOneOAuthConnectionArgs {

    @Field(() => OAuthConnectionUpdateInput, {nullable:false})
    @Type(() => OAuthConnectionUpdateInput)
    data!: OAuthConnectionUpdateInput;

    @Field(() => OAuthConnectionWhereUniqueInput, {nullable:false})
    @Type(() => OAuthConnectionWhereUniqueInput)
    where!: OAuthConnectionWhereUniqueInput;
}
