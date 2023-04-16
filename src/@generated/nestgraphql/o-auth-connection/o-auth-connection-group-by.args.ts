import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OAuthConnectionWhereInput } from './o-auth-connection-where.input';
import { Type } from 'class-transformer';
import { OAuthConnectionOrderByWithAggregationInput } from './o-auth-connection-order-by-with-aggregation.input';
import { OAuthConnectionScalarFieldEnum } from './o-auth-connection-scalar-field.enum';
import { OAuthConnectionScalarWhereWithAggregatesInput } from './o-auth-connection-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { OAuthConnectionCountAggregateInput } from './o-auth-connection-count-aggregate.input';
import { OAuthConnectionAvgAggregateInput } from './o-auth-connection-avg-aggregate.input';
import { OAuthConnectionSumAggregateInput } from './o-auth-connection-sum-aggregate.input';
import { OAuthConnectionMinAggregateInput } from './o-auth-connection-min-aggregate.input';
import { OAuthConnectionMaxAggregateInput } from './o-auth-connection-max-aggregate.input';

@ArgsType()
export class OAuthConnectionGroupByArgs {

    @Field(() => OAuthConnectionWhereInput, {nullable:true})
    @Type(() => OAuthConnectionWhereInput)
    where?: OAuthConnectionWhereInput;

    @Field(() => [OAuthConnectionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<OAuthConnectionOrderByWithAggregationInput>;

    @Field(() => [OAuthConnectionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof OAuthConnectionScalarFieldEnum>;

    @Field(() => OAuthConnectionScalarWhereWithAggregatesInput, {nullable:true})
    having?: OAuthConnectionScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => OAuthConnectionCountAggregateInput, {nullable:true})
    _count?: OAuthConnectionCountAggregateInput;

    @Field(() => OAuthConnectionAvgAggregateInput, {nullable:true})
    _avg?: OAuthConnectionAvgAggregateInput;

    @Field(() => OAuthConnectionSumAggregateInput, {nullable:true})
    _sum?: OAuthConnectionSumAggregateInput;

    @Field(() => OAuthConnectionMinAggregateInput, {nullable:true})
    _min?: OAuthConnectionMinAggregateInput;

    @Field(() => OAuthConnectionMaxAggregateInput, {nullable:true})
    _max?: OAuthConnectionMaxAggregateInput;
}
