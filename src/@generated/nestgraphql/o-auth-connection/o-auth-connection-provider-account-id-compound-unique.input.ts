import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OAuthProvider } from '../prisma/o-auth-provider.enum';
import { Int } from '@nestjs/graphql';

@InputType()
export class OAuthConnectionProviderAccountIdCompoundUniqueInput {

    @Field(() => OAuthProvider, {nullable:false})
    provider!: keyof typeof OAuthProvider;

    @Field(() => Int, {nullable:false})
    accountId!: number;
}
