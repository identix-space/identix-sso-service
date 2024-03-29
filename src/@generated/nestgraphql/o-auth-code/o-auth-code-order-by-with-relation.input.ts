import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { OAuthConnectionOrderByWithRelationInput } from '../o-auth-connection/o-auth-connection-order-by-with-relation.input';

@InputType()
export class OAuthCodeOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    expiresAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    oAuthConnectionId?: keyof typeof SortOrder;

    @Field(() => OAuthConnectionOrderByWithRelationInput, {nullable:true})
    oAuthConnection?: OAuthConnectionOrderByWithRelationInput;
}
