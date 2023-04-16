import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OAuthProvider } from './o-auth-provider.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumOAuthProviderFilter } from './nested-enum-o-auth-provider-filter.input';

@InputType()
export class NestedEnumOAuthProviderWithAggregatesFilter {

    @Field(() => OAuthProvider, {nullable:true})
    equals?: keyof typeof OAuthProvider;

    @Field(() => [OAuthProvider], {nullable:true})
    in?: Array<keyof typeof OAuthProvider>;

    @Field(() => [OAuthProvider], {nullable:true})
    notIn?: Array<keyof typeof OAuthProvider>;

    @Field(() => NestedEnumOAuthProviderWithAggregatesFilter, {nullable:true})
    not?: NestedEnumOAuthProviderWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumOAuthProviderFilter, {nullable:true})
    _min?: NestedEnumOAuthProviderFilter;

    @Field(() => NestedEnumOAuthProviderFilter, {nullable:true})
    _max?: NestedEnumOAuthProviderFilter;
}
