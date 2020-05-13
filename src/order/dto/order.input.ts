import {Field, InputType} from "@nestjs/graphql";
import {UserInfoInput} from "./user.info.input";

@InputType()
export class OrderInput {
    @Field(() => UserInfoInput)
    userInfo: UserInfoInput;
    @Field( () => [String])
    orders: string[];
}
