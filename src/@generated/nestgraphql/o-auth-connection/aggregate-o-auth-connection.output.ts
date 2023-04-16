import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { OAuthConnectionCountAggregate } from './o-auth-connection-count-aggregate.output';
import { OAuthConnectionAvgAggregate } from './o-auth-connection-avg-aggregate.output';
import { OAuthConnectionSumAggregate } from './o-auth-connection-sum-aggregate.output';
import { OAuthConnectionMinAggregate } from './o-auth-connection-min-aggregate.output';
import { OAuthConnectionMaxAggregate } from './o-auth-connection-max-aggregate.output';

@ObjectType()
export class AggregateOAuthConnection {

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
