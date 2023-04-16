import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { OAuthConnection } from '../o-auth-connection/o-auth-connection.model';

@ObjectType()
export class OAuthCode {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => Date, {nullable:false})
    expiresAt!: Date;

    @Field(() => Int, {nullable:false})
    oAuthConnectionId!: number;

    @Field(() => OAuthConnection, {nullable:false})
    oAuthConnection?: OAuthConnection;
}
