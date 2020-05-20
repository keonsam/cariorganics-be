import { Test, TestingModule } from '@nestjs/testing';
import {ProductResolver} from "./product.resolver";
import {ProductService} from "./product.service";

describe('ProductsResolver', () => {
    let productsResolver: ProductResolver;
    const product = {
        productId: "12",
        brand: "test",
        name: "testing",
        store: "store A",
        price: "22.31",
        description: "any"
    };
    const products = [product];
    const productsService = {
        addProduct: () => product,
        getProducts: () => products
    };
    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            providers: [ProductResolver, ProductService],
        })
            .overrideProvider(ProductService)
            .useValue(productsService)
            .compile();

        productsResolver = app.get<ProductResolver>(ProductResolver);
    });

    describe('root',() => {
        it('should return saved product', async () => {
            const data = await productsResolver.addProduct(product);
            expect(data).toBe(product);
        });
    });

    describe('root',() => {
        it('should return products', async () => {
            const data = await productsResolver.getProducts();
            expect(data).toBe(products);
        });
    });
});
