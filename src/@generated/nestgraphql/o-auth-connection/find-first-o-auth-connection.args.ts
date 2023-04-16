import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OAuthConnectionWhereInput } from './o-auth-connection-where.input';
import { Type } from 'class-transformer';
import { OAuthConnectionOrderByWithRelationInput } from './o-auth-connection-order-by-with-relation.input';
import { OAuthConnectionWhereUniqueInput } from './o-auth-connection-where-unique.input';
import { Int } from '@nestjs/graphql';
import { OAuthConnectionScalarFieldEnum } from './o-auth-connection-scalar-field.enum';

@ArgsType()
export class FindFirstOAuthConnectionArgs {

    @Field(() => OAuthConnectionWhereInput, {nullable:true})
    @Type(() => OAuthConnectionWhereInput)
    where?: OAuthConnectionWhereInput;

    @Field(() => [OAuthConnectionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<OAuthConnectionOrderByWithRelationInput>;

    @Field(() => OAuthConnectionWhereUniqueInput, {nullable:true})
    cursor?: OAuthConnectionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [OAuthConnectionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof OAuthConnectionScalarFieldEnum>;
}
