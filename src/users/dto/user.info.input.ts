import {Field, ID, InputType} from "@nestjs/graphql";

@InputType()
export class UserInfoInput {
    @Field(() => ID, {nullable: true})
    userId?: string;
    @Field()
    firstName: string;
    @Field()
    lastName: string;
    @Field()
    email: string;
    @Field()
    phoneNumber: string;
    @Field()
    location: string;
}
