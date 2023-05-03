import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { OAuthProvider } from '../prisma/o-auth-provider.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { Account } from '../account/account.model';
import { OAuthCode } from '../o-auth-code/o-auth-code.model';
import { OAuthConnectionCount } from './o-auth-connection-count.output';

@ObjectType()
export class OAuthConnection {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Int, {nullable:false})
    accountId!: number;

    @Field(() => OAuthProvider, {nullable:false})
    provider!: keyof typeof OAuthProvider;

    @Field(() => String, {nullable:false})
    uid!: string;

    @Field(() => GraphQLJSON, {nullable:false})
    otherData!: any;

    @Field(() => Account, {nullable:false})
    account?: Account;

    @Field(() => [OAuthCode], {nullable:true})
    oAuthCodes?: Array<OAuthCode>;

    @Field(() => OAuthConnectionCount, {nullable:false})
    _count?: OAuthConnectionCount;
}
