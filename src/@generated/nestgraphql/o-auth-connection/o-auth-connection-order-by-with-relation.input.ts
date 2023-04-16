import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AccountOrderByWithRelationInput } from '../account/account-order-by-with-relation.input';
import { OAuthCodeOrderByRelationAggregateInput } from '../o-auth-code/o-auth-code-order-by-relation-aggregate.input';

@InputType()
export class OAuthConnectionOrderByWithRelationInput {

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
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    avatar?: keyof typeof SortOrder;

    @Field(() => AccountOrderByWithRelationInput, {nullable:true})
    account?: AccountOrderByWithRelationInput;

    @Field(() => OAuthCodeOrderByRelationAggregateInput, {nullable:true})
    oAuthCodes?: OAuthCodeOrderByRelationAggregateInput;
}
