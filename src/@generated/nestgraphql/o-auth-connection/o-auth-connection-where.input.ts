import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumOAuthProviderFilter } from '../prisma/enum-o-auth-provider-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { AccountRelationFilter } from '../account/account-relation-filter.input';
import { OAuthCodeListRelationFilter } from '../o-auth-code/o-auth-code-list-relation-filter.input';

@InputType()
export class OAuthConnectionWhereInput {

    @Field(() => [OAuthConnectionWhereInput], {nullable:true})
    AND?: Array<OAuthConnectionWhereInput>;

    @Field(() => [OAuthConnectionWhereInput], {nullable:true})
    OR?: Array<OAuthConnectionWhereInput>;

    @Field(() => [OAuthConnectionWhereInput], {nullable:true})
    NOT?: Array<OAuthConnectionWhereInput>;

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

    @Field(() => StringNullableFilter, {nullable:true})
    email?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    avatar?: StringNullableFilter;

    @Field(() => AccountRelationFilter, {nullable:true})
    account?: AccountRelationFilter;

    @Field(() => OAuthCodeListRelationFilter, {nullable:true})
    oAuthCodes?: OAuthCodeListRelationFilter;
}
