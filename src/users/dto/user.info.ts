import {Field, ID, ObjectType} from "@nestjs/graphql";
import {UserInfoInput} from "./user.info.input";

@ObjectType()
export class UserInfo {
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
    constructor(user?: UserInfoInput) {
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.email = user.email;
        this.phoneNumber = user.phoneNumber;
        this.location = user.location;
    }
}
