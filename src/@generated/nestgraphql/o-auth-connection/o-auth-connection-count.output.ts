import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class OAuthConnectionCount {

    @Field(() => Int, {nullable:false})
    oAuthCodes?: number;
}
