import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class OAuthCodeScalarWhereWithAggregatesInput {

    @Field(() => [OAuthCodeScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<OAuthCodeScalarWhereWithAggregatesInput>;

    @Field(() => [OAuthCodeScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<OAuthCodeScalarWhereWithAggregatesInput>;

    @Field(() => [OAuthCodeScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<OAuthCodeScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    code?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    state?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    expiresAt?: DateTimeWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    oAuthConnectionId?: IntWithAggregatesFilter;
}
