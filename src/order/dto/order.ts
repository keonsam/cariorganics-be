import {Field, ObjectType} from "@nestjs/graphql";

@ObjectType()
export class Order {
    @Field()
    orderId: string;
    @Field(() => [String])
    orders: string[];

    constructor(orderId?: string, orders?: string[]) {
        this.orderId = orderId;
        this.orders = orders;
    }
}
