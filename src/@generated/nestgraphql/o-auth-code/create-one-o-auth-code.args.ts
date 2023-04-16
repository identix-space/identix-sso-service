import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OAuthCodeCreateInput } from './o-auth-code-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneOAuthCodeArgs {

    @Field(() => OAuthCodeCreateInput, {nullable:false})
    @Type(() => OAuthCodeCreateInput)
    data!: OAuthCodeCreateInput;
}
