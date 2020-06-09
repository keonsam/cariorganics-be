import {Field, Float, ID, Int, ObjectType} from "@nestjs/graphql";
import {Enquire} from "../../enquire/dto/enquire";
import {UserInfo} from "../../users/dto/user.info";

@ObjectType()
export class CheckoutDto {
    @Field(() => ID)
    checkoutId: string;
    @Field( () => UserInfo)
    userInfo: UserInfo;
    @Field(() => [Enquire])
    enquire: Enquire[];
    @Field( () => [ID])
    products: string[];
    @Field()
    status: string;
    @Field( () => Float)
    createdOn: number;
    @Field( () => Float)
    modifiedOn: number;
    constructor(userInfo: UserInfo, enquire?: Enquire[], products?: string[]) {
        this.userInfo = userInfo;
        this.enquire = enquire;
        this.products = products;
    }
}
