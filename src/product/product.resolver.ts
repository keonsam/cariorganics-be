import {Args, Mutation, Query, Resolver} from "@nestjs/graphql";
import {ProductService} from "./product.service";
import {ProductDto} from "./dto/product.dto";
import {ProductInput} from "./dto/product.input";

@Resolver()
export class ProductResolver {
    constructor(private  productsService: ProductService) {
    }

    @Query(() => [ProductDto])
    async getProducts( ): Promise<ProductDto[]> {
        return this.productsService.getProducts();
    }

    @Mutation(() => ProductDto)
    async addProduct(@Args('productData') productData: ProductInput): Promise<ProductDto> {
        return this.productsService.addProduct(productData);
    }
}
