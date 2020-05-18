import {Field, ObjectType} from "@nestjs/graphql";

@ObjectType()
export class Order {
    @Field()
    orderId: string;

    constructor(orderId?: string, orders?: string[]) {
        this.orderId = orderId;
        // this.orders = orders;
    }
}
