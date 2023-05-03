import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { OAuthConnectionCountOrderByAggregateInput } from './o-auth-connection-count-order-by-aggregate.input';
import { OAuthConnectionAvgOrderByAggregateInput } from './o-auth-connection-avg-order-by-aggregate.input';
import { OAuthConnectionMaxOrderByAggregateInput } from './o-auth-connection-max-order-by-aggregate.input';
import { OAuthConnectionMinOrderByAggregateInput } from './o-auth-connection-min-order-by-aggregate.input';
import { OAuthConnectionSumOrderByAggregateInput } from './o-auth-connection-sum-order-by-aggregate.input';

@InputType()
export class OAuthConnectionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    accountId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    provider?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    uid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    otherData?: keyof typeof SortOrder;

    @Field(() => OAuthConnectionCountOrderByAggregateInput, {nullable:true})
    _count?: OAuthConnectionCountOrderByAggregateInput;

    @Field(() => OAuthConnectionAvgOrderByAggregateInput, {nullable:true})
    _avg?: OAuthConnectionAvgOrderByAggregateInput;

    @Field(() => OAuthConnectionMaxOrderByAggregateInput, {nullable:true})
    _max?: OAuthConnectionMaxOrderByAggregateInput;

    @Field(() => OAuthConnectionMinOrderByAggregateInput, {nullable:true})
    _min?: OAuthConnectionMinOrderByAggregateInput;

    @Field(() => OAuthConnectionSumOrderByAggregateInput, {nullable:true})
    _sum?: OAuthConnectionSumOrderByAggregateInput;
}
