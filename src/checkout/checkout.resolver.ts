import {Args, Mutation, Resolver} from "@nestjs/graphql";
import {CheckoutInput} from "./dto/checkout.input";
import {CheckoutDto} from "./dto/checkout.dto";
import {CheckoutService} from "./checkout.service";
import { ApolloError } from "apollo-server-errors";

@Resolver()
export class CheckoutResolver {
    constructor(private checkoutService: CheckoutService) {
    }

    @Mutation(() => CheckoutDto)
    async checkout(@Args('checkoutData') checkoutData: CheckoutInput): Promise<CheckoutDto> {
        try {
            return await this.checkoutService.checkout(checkoutData);
        }catch (e) {
            console.log(e);
            throw new ApolloError(e, '404');
        }
    }
}
