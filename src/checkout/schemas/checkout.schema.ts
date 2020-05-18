import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";
import {Enquire} from "../../enquire/dto/enquire";
import {UserInfo} from "../../users/dto/user.info";

@Schema()
export class Checkout extends Document {
    @Prop()
    checkoutId: string;
    @Prop()
    userInfo: UserInfo;
    @Prop()
    products: string[];
    @Prop()
    enquire: Enquire[];
    @Prop()
    status: string;
    @Prop()
    createdOn: number;
    @Prop()
    modifiedOn: number;
}
export const CheckoutSchema = SchemaFactory.createForClass(Checkout);
