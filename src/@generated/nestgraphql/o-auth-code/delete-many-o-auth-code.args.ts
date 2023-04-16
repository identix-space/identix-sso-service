import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OAuthCodeWhereInput } from './o-auth-code-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyOAuthCodeArgs {

    @Field(() => OAuthCodeWhereInput, {nullable:true})
    @Type(() => OAuthCodeWhereInput)
    where?: OAuthCodeWhereInput;
}
