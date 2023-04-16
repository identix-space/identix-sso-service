import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OAuthCodeWhereInput } from './o-auth-code-where.input';
import { Type } from 'class-transformer';
import { OAuthCodeOrderByWithAggregationInput } from './o-auth-code-order-by-with-aggregation.input';
import { OAuthCodeScalarFieldEnum } from './o-auth-code-scalar-field.enum';
import { OAuthCodeScalarWhereWithAggregatesInput } from './o-auth-code-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { OAuthCodeCountAggregateInput } from './o-auth-code-count-aggregate.input';
import { OAuthCodeAvgAggregateInput } from './o-auth-code-avg-aggregate.input';
import { OAuthCodeSumAggregateInput } from './o-auth-code-sum-aggregate.input';
import { OAuthCodeMinAggregateInput } from './o-auth-code-min-aggregate.input';
import { OAuthCodeMaxAggregateInput } from './o-auth-code-max-aggregate.input';

@ArgsType()
export class OAuthCodeGroupByArgs {

    @Field(() => OAuthCodeWhereInput, {nullable:true})
    @Type(() => OAuthCodeWhereInput)
    where?: OAuthCodeWhereInput;

    @Field(() => [OAuthCodeOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<OAuthCodeOrderByWithAggregationInput>;

    @Field(() => [OAuthCodeScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof OAuthCodeScalarFieldEnum>;

    @Field(() => OAuthCodeScalarWhereWithAggregatesInput, {nullable:true})
    having?: OAuthCodeScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => OAuthCodeCountAggregateInput, {nullable:true})
    _count?: OAuthCodeCountAggregateInput;

    @Field(() => OAuthCodeAvgAggregateInput, {nullable:true})
    _avg?: OAuthCodeAvgAggregateInput;

    @Field(() => OAuthCodeSumAggregateInput, {nullable:true})
    _sum?: OAuthCodeSumAggregateInput;

    @Field(() => OAuthCodeMinAggregateInput, {nullable:true})
    _min?: OAuthCodeMinAggregateInput;

    @Field(() => OAuthCodeMaxAggregateInput, {nullable:true})
    _max?: OAuthCodeMaxAggregateInput;
}
