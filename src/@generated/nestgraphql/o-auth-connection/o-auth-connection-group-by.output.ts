import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { OAuthProvider } from '../prisma/o-auth-provider.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { OAuthConnectionCountAggregate } from './o-auth-connection-count-aggregate.output';
import { OAuthConnectionAvgAggregate } from './o-auth-connection-avg-aggregate.output';
import { OAuthConnectionSumAggregate } from './o-auth-connection-sum-aggregate.output';
import { OAuthConnectionMinAggregate } from './o-auth-connection-min-aggregate.output';
import { OAuthConnectionMaxAggregate } from './o-auth-connection-max-aggregate.output';

@ObjectType()
export class OAuthConnectionGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Int, {nullable:false})
    accountId!: number;

    @Field(() => OAuthProvider, {nullable:false})
    provider!: keyof typeof OAuthProvider;

    @Field(() => String, {nullable:false})
    uid!: string;

    @Field(() => GraphQLJSON, {nullable:false})
    otherData!: any;

    @Field(() => OAuthConnectionCountAggregate, {nullable:true})
    _count?: OAuthConnectionCountAggregate;

    @Field(() => OAuthConnectionAvgAggregate, {nullable:true})
    _avg?: OAuthConnectionAvgAggregate;

    @Field(() => OAuthConnectionSumAggregate, {nullable:true})
    _sum?: OAuthConnectionSumAggregate;

    @Field(() => OAuthConnectionMinAggregate, {nullable:true})
    _min?: OAuthConnectionMinAggregate;

    @Field(() => OAuthConnectionMaxAggregate, {nullable:true})
    _max?: OAuthConnectionMaxAggregate;
}
