import {Injectable} from "@nestjs/common";
import {CheckoutInput} from "./dto/checkout.input";
import {CheckoutDto} from "./dto/checkout.dto";
import {UserInfo} from "../users/dto/user.info";
import {Enquire} from "../enquire/dto/enquire";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Checkout} from "./schemas/checkout.schema";
import { v4 as uuid } from "uuid";

@Injectable()
export class CheckoutService {
    constructor(@InjectModel('Checkout') private readonly checkoutModel: Model<Checkout>) {
    }

    async checkout(checkoutData: CheckoutInput): Promise<CheckoutDto> {
        const user: UserInfo = new UserInfo(checkoutData.user);
        const enquire: Enquire[] = checkoutData.enquire;
        const checkout: CheckoutDto = new CheckoutDto(user, enquire, checkoutData.products);
        checkout.checkoutId = uuid();
        checkout.status = 'unconfirmed';
        checkout.createdOn = Date.now();
        const createdCheckout = new this.checkoutModel(checkout);
        return createdCheckout.save();
    }
}
