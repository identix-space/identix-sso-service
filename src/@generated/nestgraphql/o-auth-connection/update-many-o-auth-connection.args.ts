import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OAuthConnectionUpdateManyMutationInput } from './o-auth-connection-update-many-mutation.input';
import { Type } from 'class-transformer';
import { OAuthConnectionWhereInput } from './o-auth-connection-where.input';

@ArgsType()
export class UpdateManyOAuthConnectionArgs {

    @Field(() => OAuthConnectionUpdateManyMutationInput, {nullable:false})
    @Type(() => OAuthConnectionUpdateManyMutationInput)
    data!: OAuthConnectionUpdateManyMutationInput;

    @Field(() => OAuthConnectionWhereInput, {nullable:true})
    @Type(() => OAuthConnectionWhereInput)
    where?: OAuthConnectionWhereInput;
}
