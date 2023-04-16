import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { OAuthConnectionRelationFilter } from '../o-auth-connection/o-auth-connection-relation-filter.input';

@InputType()
export class OAuthCodeWhereInput {

    @Field(() => [OAuthCodeWhereInput], {nullable:true})
    AND?: Array<OAuthCodeWhereInput>;

    @Field(() => [OAuthCodeWhereInput], {nullable:true})
    OR?: Array<OAuthCodeWhereInput>;

    @Field(() => [OAuthCodeWhereInput], {nullable:true})
    NOT?: Array<OAuthCodeWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    code?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    state?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    expiresAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    oAuthConnectionId?: IntFilter;

    @Field(() => OAuthConnectionRelationFilter, {nullable:true})
    oAuthConnection?: OAuthConnectionRelationFilter;
}
