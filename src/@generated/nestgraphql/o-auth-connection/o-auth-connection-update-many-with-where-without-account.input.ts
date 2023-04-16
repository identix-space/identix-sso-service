import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OAuthConnectionScalarWhereInput } from './o-auth-connection-scalar-where.input';
import { Type } from 'class-transformer';
import { OAuthConnectionUpdateManyMutationInput } from './o-auth-connection-update-many-mutation.input';

@InputType()
export class OAuthConnectionUpdateManyWithWhereWithoutAccountInput {

    @Field(() => OAuthConnectionScalarWhereInput, {nullable:false})
    @Type(() => OAuthConnectionScalarWhereInput)
    where!: OAuthConnectionScalarWhereInput;

    @Field(() => OAuthConnectionUpdateManyMutationInput, {nullable:false})
    @Type(() => OAuthConnectionUpdateManyMutationInput)
    data!: OAuthConnectionUpdateManyMutationInput;
}
