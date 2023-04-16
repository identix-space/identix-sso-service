import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OAuthCodeUpdateManyMutationInput } from './o-auth-code-update-many-mutation.input';
import { Type } from 'class-transformer';
import { OAuthCodeWhereInput } from './o-auth-code-where.input';

@ArgsType()
export class UpdateManyOAuthCodeArgs {

    @Field(() => OAuthCodeUpdateManyMutationInput, {nullable:false})
    @Type(() => OAuthCodeUpdateManyMutationInput)
    data!: OAuthCodeUpdateManyMutationInput;

    @Field(() => OAuthCodeWhereInput, {nullable:true})
    @Type(() => OAuthCodeWhereInput)
    where?: OAuthCodeWhereInput;
}
