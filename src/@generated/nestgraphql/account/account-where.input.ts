import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumAccountRoleNullableListFilter } from '../prisma/enum-account-role-nullable-list-filter.input';
import { EnumAccountStatusFilter } from '../prisma/enum-account-status-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { AccountSessionListRelationFilter } from '../account-session/account-session-list-relation-filter.input';
import { OAuthConnectionListRelationFilter } from '../o-auth-connection/o-auth-connection-list-relation-filter.input';

@InputType()
export class AccountWhereInput {

    @Field(() => [AccountWhereInput], {nullable:true})
    AND?: Array<AccountWhereInput>;

    @Field(() => [AccountWhereInput], {nullable:true})
    OR?: Array<AccountWhereInput>;

    @Field(() => [AccountWhereInput], {nullable:true})
    NOT?: Array<AccountWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => EnumAccountRoleNullableListFilter, {nullable:true})
    roles?: EnumAccountRoleNullableListFilter;

    @Field(() => EnumAccountStatusFilter, {nullable:true})
    status?: EnumAccountStatusFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    avatarUrl?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    did?: StringFilter;

    @Field(() => AccountSessionListRelationFilter, {nullable:true})
    sessions?: AccountSessionListRelationFilter;

    @Field(() => OAuthConnectionListRelationFilter, {nullable:true})
    connections?: OAuthConnectionListRelationFilter;
}
