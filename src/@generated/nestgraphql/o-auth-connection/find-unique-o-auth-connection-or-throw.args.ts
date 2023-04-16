import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OAuthConnectionWhereUniqueInput } from './o-auth-connection-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueOAuthConnectionOrThrowArgs {

    @Field(() => OAuthConnectionWhereUniqueInput, {nullable:false})
    @Type(() => OAuthConnectionWhereUniqueInput)
    where!: OAuthConnectionWhereUniqueInput;
}
