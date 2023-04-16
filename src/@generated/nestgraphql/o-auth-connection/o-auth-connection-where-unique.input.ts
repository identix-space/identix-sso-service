import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { OAuthConnectionProviderAccountIdCompoundUniqueInput } from './o-auth-connection-provider-account-id-compound-unique.input';

@InputType()
export class OAuthConnectionWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => OAuthConnectionProviderAccountIdCompoundUniqueInput, {nullable:true})
    provider_accountId?: OAuthConnectionProviderAccountIdCompoundUniqueInput;
}
