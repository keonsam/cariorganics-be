import {Field, InputType} from "@nestjs/graphql";

@InputType()
export class UserInfoInput {
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
