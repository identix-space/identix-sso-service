import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class OAuthCodeScalarWhereInput {

    @Field(() => [OAuthCodeScalarWhereInput], {nullable:true})
    AND?: Array<OAuthCodeScalarWhereInput>;

    @Field(() => [OAuthCodeScalarWhereInput], {nullable:true})
    OR?: Array<OAuthCodeScalarWhereInput>;

    @Field(() => [OAuthCodeScalarWhereInput], {nullable:true})
    NOT?: Array<OAuthCodeScalarWhereInput>;

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
}
