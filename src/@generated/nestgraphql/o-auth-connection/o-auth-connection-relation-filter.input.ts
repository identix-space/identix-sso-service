import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OAuthConnectionWhereInput } from './o-auth-connection-where.input';

@InputType()
export class OAuthConnectionRelationFilter {

    @Field(() => OAuthConnectionWhereInput, {nullable:true})
    is?: OAuthConnectionWhereInput;

    @Field(() => OAuthConnectionWhereInput, {nullable:true})
    isNot?: OAuthConnectionWhereInput;
}
