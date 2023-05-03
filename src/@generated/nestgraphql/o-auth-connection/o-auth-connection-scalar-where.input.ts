import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumOAuthProviderFilter } from '../prisma/enum-o-auth-provider-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';

@InputType()
export class OAuthConnectionScalarWhereInput {

    @Field(() => [OAuthConnectionScalarWhereInput], {nullable:true})
    AND?: Array<OAuthConnectionScalarWhereInput>;

    @Field(() => [OAuthConnectionScalarWhereInput], {nullable:true})
    OR?: Array<OAuthConnectionScalarWhereInput>;

    @Field(() => [OAuthConnectionScalarWhereInput], {nullable:true})
    NOT?: Array<OAuthConnectionScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    accountId?: IntFilter;

    @Field(() => EnumOAuthProviderFilter, {nullable:true})
    provider?: EnumOAuthProviderFilter;

    @Field(() => StringFilter, {nullable:true})
    uid?: StringFilter;

    @Field(() => JsonFilter, {nullable:true})
    otherData?: JsonFilter;
}
