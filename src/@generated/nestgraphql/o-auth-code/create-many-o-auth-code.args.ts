import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OAuthCodeCreateManyInput } from './o-auth-code-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyOAuthCodeArgs {

    @Field(() => [OAuthCodeCreateManyInput], {nullable:false})
    @Type(() => OAuthCodeCreateManyInput)
    data!: Array<OAuthCodeCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
