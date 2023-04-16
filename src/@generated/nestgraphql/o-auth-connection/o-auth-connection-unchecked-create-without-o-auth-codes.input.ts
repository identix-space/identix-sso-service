import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { OAuthProvider } from '../prisma/o-auth-provider.enum';

@InputType()
export class OAuthConnectionUncheckedCreateWithoutOAuthCodesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:false})
    accountId!: number;

    @Field(() => OAuthProvider, {nullable:false})
    provider!: keyof typeof OAuthProvider;

    @Field(() => String, {nullable:false})
    uid!: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    avatar?: string;
}
