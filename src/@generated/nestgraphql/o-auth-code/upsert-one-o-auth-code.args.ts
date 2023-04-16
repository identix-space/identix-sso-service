import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OAuthCodeWhereUniqueInput } from './o-auth-code-where-unique.input';
import { Type } from 'class-transformer';
import { OAuthCodeCreateInput } from './o-auth-code-create.input';
import { OAuthCodeUpdateInput } from './o-auth-code-update.input';

@ArgsType()
export class UpsertOneOAuthCodeArgs {

    @Field(() => OAuthCodeWhereUniqueInput, {nullable:false})
    @Type(() => OAuthCodeWhereUniqueInput)
    where!: OAuthCodeWhereUniqueInput;

    @Field(() => OAuthCodeCreateInput, {nullable:false})
    @Type(() => OAuthCodeCreateInput)
    create!: OAuthCodeCreateInput;

    @Field(() => OAuthCodeUpdateInput, {nullable:false})
    @Type(() => OAuthCodeUpdateInput)
    update!: OAuthCodeUpdateInput;
}
