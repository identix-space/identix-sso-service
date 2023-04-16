import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OAuthCodeWhereInput } from './o-auth-code-where.input';
import { Type } from 'class-transformer';
import { OAuthCodeOrderByWithRelationInput } from './o-auth-code-order-by-with-relation.input';
import { OAuthCodeWhereUniqueInput } from './o-auth-code-where-unique.input';
import { Int } from '@nestjs/graphql';
import { OAuthCodeCountAggregateInput } from './o-auth-code-count-aggregate.input';
import { OAuthCodeAvgAggregateInput } from './o-auth-code-avg-aggregate.input';
import { OAuthCodeSumAggregateInput } from './o-auth-code-sum-aggregate.input';
import { OAuthCodeMinAggregateInput } from './o-auth-code-min-aggregate.input';
import { OAuthCodeMaxAggregateInput } from './o-auth-code-max-aggregate.input';

@ArgsType()
export class OAuthCodeAggregateArgs {

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
