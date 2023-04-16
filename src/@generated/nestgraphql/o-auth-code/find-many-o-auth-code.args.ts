import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OAuthCodeWhereInput } from './o-auth-code-where.input';
import { Type } from 'class-transformer';
import { OAuthCodeOrderByWithRelationInput } from './o-auth-code-order-by-with-relation.input';
import { OAuthCodeWhereUniqueInput } from './o-auth-code-where-unique.input';
import { Int } from '@nestjs/graphql';
import { OAuthCodeScalarFieldEnum } from './o-auth-code-scalar-field.enum';

@ArgsType()
export class FindManyOAuthCodeArgs {

    @Field(() => OAuthCodeWhereInput, {nullable:true})
    @Type(() => OAuthCodeWhereInput)
    where?: OAuthCodeWhereInput;

    @Field(() => [OAuthCodeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<OAuthCodeOrderByWithRelationInput>;

    @Field(() => OAuthCodeWhereUniqueInput, {nullable:true})
    cursor?: OAuthCodeWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [OAuthCodeScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof OAuthCodeScalarFieldEnum>;
}
