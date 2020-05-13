import {Args, Mutation, Resolver} from "@nestjs/graphql";
import {OrderInput} from "./dto/order.input";
import {OrderService} from "./order.service";
import {Order} from "./dto/order";

@Resolver()
export class OrderResolver {
    constructor(
        private orderService: OrderService
    ) {
    }
    @Mutation(() => Order)
    async addOrder(@Args('orderData') orderData: OrderInput): Promise<Order> {
        return await this.orderService.addOrder(orderData).toPromise();
    }
}
