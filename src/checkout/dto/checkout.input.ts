import {Field, ID, InputType} from "@nestjs/graphql";
import {UserInfoInput} from "../../users/dto/user.info.input";
import {EnquireInput} from "../../enquire/dto/enquire.input";

@InputType()
export class CheckoutInput {
    @Field( () => UserInfoInput)
    user: UserInfoInput;
    @Field(() => [EnquireInput], {nullable: true})
    enquire: EnquireInput[];
    @Field( () => [ID], {nullable: true})
    products: string[];
}
