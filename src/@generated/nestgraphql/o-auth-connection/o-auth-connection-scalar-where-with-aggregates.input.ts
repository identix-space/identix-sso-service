import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { EnumOAuthProviderWithAggregatesFilter } from '../prisma/enum-o-auth-provider-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { JsonWithAggregatesFilter } from '../prisma/json-with-aggregates-filter.input';

@InputType()
export class OAuthConnectionScalarWhereWithAggregatesInput {

    @Field(() => [OAuthConnectionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<OAuthConnectionScalarWhereWithAggregatesInput>;

    @Field(() => [OAuthConnectionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<OAuthConnectionScalarWhereWithAggregatesInput>;

    @Field(() => [OAuthConnectionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<OAuthConnectionScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    accountId?: IntWithAggregatesFilter;

    @Field(() => EnumOAuthProviderWithAggregatesFilter, {nullable:true})
    provider?: EnumOAuthProviderWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    uid?: StringWithAggregatesFilter;

    @Field(() => JsonWithAggregatesFilter, {nullable:true})
    otherData?: JsonWithAggregatesFilter;
}
