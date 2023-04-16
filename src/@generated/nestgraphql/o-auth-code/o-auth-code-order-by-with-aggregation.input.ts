import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { OAuthCodeCountOrderByAggregateInput } from './o-auth-code-count-order-by-aggregate.input';
import { OAuthCodeAvgOrderByAggregateInput } from './o-auth-code-avg-order-by-aggregate.input';
import { OAuthCodeMaxOrderByAggregateInput } from './o-auth-code-max-order-by-aggregate.input';
import { OAuthCodeMinOrderByAggregateInput } from './o-auth-code-min-order-by-aggregate.input';
import { OAuthCodeSumOrderByAggregateInput } from './o-auth-code-sum-order-by-aggregate.input';

@InputType()
export class OAuthCodeOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    state?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    expiresAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    oAuthConnectionId?: keyof typeof SortOrder;

    @Field(() => OAuthCodeCountOrderByAggregateInput, {nullable:true})
    _count?: OAuthCodeCountOrderByAggregateInput;

    @Field(() => OAuthCodeAvgOrderByAggregateInput, {nullable:true})
    _avg?: OAuthCodeAvgOrderByAggregateInput;

    @Field(() => OAuthCodeMaxOrderByAggregateInput, {nullable:true})
    _max?: OAuthCodeMaxOrderByAggregateInput;

    @Field(() => OAuthCodeMinOrderByAggregateInput, {nullable:true})
    _min?: OAuthCodeMinOrderByAggregateInput;

    @Field(() => OAuthCodeSumOrderByAggregateInput, {nullable:true})
    _sum?: OAuthCodeSumOrderByAggregateInput;
}
