import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { OAuthProvider } from '../prisma/o-auth-provider.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { OAuthCodeUncheckedCreateNestedManyWithoutOAuthConnectionInput } from '../o-auth-code/o-auth-code-unchecked-create-nested-many-without-o-auth-connection.input';

@InputType()
export class OAuthConnectionUncheckedCreateInput {

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

    @Field(() => GraphQLJSON, {nullable:false})
    otherData!: any;

    @Field(() => OAuthCodeUncheckedCreateNestedManyWithoutOAuthConnectionInput, {nullable:true})
    oAuthCodes?: OAuthCodeUncheckedCreateNestedManyWithoutOAuthConnectionInput;
}
