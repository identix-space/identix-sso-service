import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AccountRole } from '../prisma/account-role.enum';
import { AccountStatus } from '../prisma/account-status.enum';
import { AccountSession } from '../account-session/account-session.model';
import { OAuthConnection } from '../o-auth-connection/o-auth-connection.model';
import { AccountCount } from './account-count.output';

@ObjectType()
export class Account {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [AccountRole], {nullable:true})
    roles!: Array<keyof typeof AccountRole>;

    @Field(() => AccountStatus, {nullable:false})
    status!: keyof typeof AccountStatus;

    @Field(() => String, {nullable:true})
    avatarUrl!: string | null;

    @Field(() => String, {nullable:false})
    did!: string;

    @Field(() => [AccountSession], {nullable:true})
    sessions?: Array<AccountSession>;

    @Field(() => [OAuthConnection], {nullable:true})
    connections?: Array<OAuthConnection>;

    @Field(() => AccountCount, {nullable:false})
    _count?: AccountCount;
}
