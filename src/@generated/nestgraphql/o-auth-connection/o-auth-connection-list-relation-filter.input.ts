import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OAuthConnectionWhereInput } from './o-auth-connection-where.input';

@InputType()
export class OAuthConnectionListRelationFilter {

    @Field(() => OAuthConnectionWhereInput, {nullable:true})
    every?: OAuthConnectionWhereInput;

    @Field(() => OAuthConnectionWhereInput, {nullable:true})
    some?: OAuthConnectionWhereInput;

    @Field(() => OAuthConnectionWhereInput, {nullable:true})
    none?: OAuthConnectionWhereInput;
}
