import {Field, InputType} from "@nestjs/graphql";
import {UserInfoInput} from "../../users/dto/user.info.input";

@InputType()
export class OrderInput {
    @Field(() => UserInfoInput)
    userInfo: UserInfoInput;
    @Field( () => [String])
    orders: string[];
}
