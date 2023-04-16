import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OAuthCodeWhereInput } from './o-auth-code-where.input';

@InputType()
export class OAuthCodeListRelationFilter {

    @Field(() => OAuthCodeWhereInput, {nullable:true})
    every?: OAuthCodeWhereInput;

    @Field(() => OAuthCodeWhereInput, {nullable:true})
    some?: OAuthCodeWhereInput;

    @Field(() => OAuthCodeWhereInput, {nullable:true})
    none?: OAuthCodeWhereInput;
}
