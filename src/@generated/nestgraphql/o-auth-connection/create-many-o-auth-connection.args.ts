import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OAuthConnectionCreateManyInput } from './o-auth-connection-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyOAuthConnectionArgs {

    @Field(() => [OAuthConnectionCreateManyInput], {nullable:false})
    @Type(() => OAuthConnectionCreateManyInput)
    data!: Array<OAuthConnectionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
