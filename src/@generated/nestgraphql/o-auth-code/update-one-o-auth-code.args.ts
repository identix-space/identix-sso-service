import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OAuthCodeUpdateInput } from './o-auth-code-update.input';
import { Type } from 'class-transformer';
import { OAuthCodeWhereUniqueInput } from './o-auth-code-where-unique.input';

@ArgsType()
export class UpdateOneOAuthCodeArgs {

    @Field(() => OAuthCodeUpdateInput, {nullable:false})
    @Type(() => OAuthCodeUpdateInput)
    data!: OAuthCodeUpdateInput;

    @Field(() => OAuthCodeWhereUniqueInput, {nullable:false})
    @Type(() => OAuthCodeWhereUniqueInput)
    where!: OAuthCodeWhereUniqueInput;
}
