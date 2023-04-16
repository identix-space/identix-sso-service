import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OAuthConnectionWhereInput } from './o-auth-connection-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyOAuthConnectionArgs {

    @Field(() => OAuthConnectionWhereInput, {nullable:true})
    @Type(() => OAuthConnectionWhereInput)
    where?: OAuthConnectionWhereInput;
}
