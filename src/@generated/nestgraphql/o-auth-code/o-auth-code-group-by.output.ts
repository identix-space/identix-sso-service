import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { OAuthCodeCountAggregate } from './o-auth-code-count-aggregate.output';
import { OAuthCodeAvgAggregate } from './o-auth-code-avg-aggregate.output';
import { OAuthCodeSumAggregate } from './o-auth-code-sum-aggregate.output';
import { OAuthCodeMinAggregate } from './o-auth-code-min-aggregate.output';
import { OAuthCodeMaxAggregate } from './o-auth-code-max-aggregate.output';

@ObjectType()
export class OAuthCodeGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:true})
    state?: string;

    @Field(() => Date, {nullable:false})
    expiresAt!: Date | string;

    @Field(() => Int, {nullable:false})
    oAuthConnectionId!: number;

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
