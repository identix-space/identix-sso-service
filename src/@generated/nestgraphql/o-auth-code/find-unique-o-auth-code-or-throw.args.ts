import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OAuthCodeWhereUniqueInput } from './o-auth-code-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueOAuthCodeOrThrowArgs {

    @Field(() => OAuthCodeWhereUniqueInput, {nullable:false})
    @Type(() => OAuthCodeWhereUniqueInput)
    where!: OAuthCodeWhereUniqueInput;
}
