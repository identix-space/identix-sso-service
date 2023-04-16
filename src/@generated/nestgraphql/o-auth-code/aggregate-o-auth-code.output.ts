import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { OAuthCodeCountAggregate } from './o-auth-code-count-aggregate.output';
import { OAuthCodeAvgAggregate } from './o-auth-code-avg-aggregate.output';
import { OAuthCodeSumAggregate } from './o-auth-code-sum-aggregate.output';
import { OAuthCodeMinAggregate } from './o-auth-code-min-aggregate.output';
import { OAuthCodeMaxAggregate } from './o-auth-code-max-aggregate.output';

@ObjectType()
export class AggregateOAuthCode {

    @Field(() => OAuthCodeCountAggregate, {nullable:true})
    _count?: OAuthCodeCountAggregate;

    @Field(() => OAuthCodeAvgAggregate, {nullable:true})
    _avg?: OAuthCodeAvgAggregate;

    @Field(() => OAuthCodeSumAggregate, {nullable:true})
    _sum?: OAuthCodeSumAggregate;

    @Field(() => OAuthCodeMinAggregate, {nullable:true})
    _min?: OAuthCodeMinAggregate;

    @Field(() => OAuthCodeMaxAggregate, {nullable:true})
    _max?: OAuthCodeMaxAggregate;
}
