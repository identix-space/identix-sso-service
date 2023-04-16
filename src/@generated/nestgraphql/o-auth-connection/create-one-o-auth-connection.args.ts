import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OAuthConnectionCreateInput } from './o-auth-connection-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneOAuthConnectionArgs {

    @Field(() => OAuthConnectionCreateInput, {nullable:false})
    @Type(() => OAuthConnectionCreateInput)
    data!: OAuthConnectionCreateInput;
}
