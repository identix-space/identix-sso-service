import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OAuthCodeScalarWhereInput } from './o-auth-code-scalar-where.input';
import { Type } from 'class-transformer';
import { OAuthCodeUpdateManyMutationInput } from './o-auth-code-update-many-mutation.input';

@InputType()
export class OAuthCodeUpdateManyWithWhereWithoutOAuthConnectionInput {

    @Field(() => OAuthCodeScalarWhereInput, {nullable:false})
    @Type(() => OAuthCodeScalarWhereInput)
    where!: OAuthCodeScalarWhereInput;

    @Field(() => OAuthCodeUpdateManyMutationInput, {nullable:false})
    @Type(() => OAuthCodeUpdateManyMutationInput)
    data!: OAuthCodeUpdateManyMutationInput;
}
