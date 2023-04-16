import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OAuthConnectionCreateManyAccountInput } from './o-auth-connection-create-many-account.input';
import { Type } from 'class-transformer';

@InputType()
export class OAuthConnectionCreateManyAccountInputEnvelope {

    @Field(() => [OAuthConnectionCreateManyAccountInput], {nullable:false})
    @Type(() => OAuthConnectionCreateManyAccountInput)
    data!: Array<OAuthConnectionCreateManyAccountInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
