import { Module } from '@nestjs/common';
import {CheckoutResolver} from "./checkout.resolver";
import {CheckoutService} from "./checkout.service";
import {MongooseModule} from "@nestjs/mongoose";
import {CheckoutSchema} from "./schemas/checkout.schema";

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'Checkout', schema: CheckoutSchema}])
    ],
    providers: [CheckoutResolver, CheckoutService],
})
export class CheckoutModule {}
