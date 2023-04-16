import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OAuthProvider } from './o-auth-provider.enum';

@InputType()
export class NestedEnumOAuthProviderFilter {

    @Field(() => OAuthProvider, {nullable:true})
    equals?: keyof typeof OAuthProvider;

    @Field(() => [OAuthProvider], {nullable:true})
    in?: Array<keyof typeof OAuthProvider>;

    @Field(() => [OAuthProvider], {nullable:true})
    notIn?: Array<keyof typeof OAuthProvider>;

    @Field(() => NestedEnumOAuthProviderFilter, {nullable:true})
    not?: NestedEnumOAuthProviderFilter;
}
