import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OAuthCodeCreateManyOAuthConnectionInput } from './o-auth-code-create-many-o-auth-connection.input';
import { Type } from 'class-transformer';

@InputType()
export class OAuthCodeCreateManyOAuthConnectionInputEnvelope {

    @Field(() => [OAuthCodeCreateManyOAuthConnectionInput], {nullable:false})
    @Type(() => OAuthCodeCreateManyOAuthConnectionInput)
    data!: Array<OAuthCodeCreateManyOAuthConnectionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
