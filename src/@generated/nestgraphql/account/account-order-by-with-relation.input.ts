import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AccountSessionOrderByRelationAggregateInput } from '../account-session/account-session-order-by-relation-aggregate.input';
import { OAuthConnectionOrderByRelationAggregateInput } from '../o-auth-connection/o-auth-connection-order-by-relation-aggregate.input';

@InputType()
export class AccountOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    roles?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    avatarUrl?: keyof typeof SortOrder;

    @Field(() => AccountSessionOrderByRelationAggregateInput, {nullable:true})
    sessions?: AccountSessionOrderByRelationAggregateInput;

    @Field(() => OAuthConnectionOrderByRelationAggregateInput, {nullable:true})
    connections?: OAuthConnectionOrderByRelationAggregateInput;
}
