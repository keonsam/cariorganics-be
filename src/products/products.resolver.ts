import {Resolver} from "@nestjs/graphql";
import {ProductsService} from "./products.service";

@Resolver()
export class ProductsResolver {
    constructor(private  productsService: ProductsService) {
    }

    // async getProducts(): Promise<> {
    //
    // }
}
