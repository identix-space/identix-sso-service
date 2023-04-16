import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OAuthConnectionWhereUniqueInput } from './o-auth-connection-where-unique.input';
import { Type } from 'class-transformer';
import { OAuthConnectionCreateInput } from './o-auth-connection-create.input';
import { OAuthConnectionUpdateInput } from './o-auth-connection-update.input';

@ArgsType()
export class UpsertOneOAuthConnectionArgs {

    @Field(() => OAuthConnectionWhereUniqueInput, {nullable:false})
    @Type(() => OAuthConnectionWhereUniqueInput)
    where!: OAuthConnectionWhereUniqueInput;

    @Field(() => OAuthConnectionCreateInput, {nullable:false})
    @Type(() => OAuthConnectionCreateInput)
    create!: OAuthConnectionCreateInput;

    @Field(() => OAuthConnectionUpdateInput, {nullable:false})
    @Type(() => OAuthConnectionUpdateInput)
    update!: OAuthConnectionUpdateInput;
}
