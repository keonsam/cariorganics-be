import { Test, TestingModule } from '@nestjs/testing';
import {getModelToken} from "@nestjs/mongoose";
import {ProductService} from "./product.service";
import {ProductDto} from "./dto/product.dto";
import {ProductInput} from "./dto/product.input";

describe('ProductsService', () => {
    let productsService: ProductService;

    const productData: ProductInput = {
        brand: "test",
        title: "testing",
        store: "store A",
        price: 31,
        description: "any"
    };

    class product {
        constructor(private data: ProductDto) {}
        save = jest.fn().mockResolvedValue(this.data);
        static find = jest.fn().mockImplementationOnce(() => ({ exec: jest.fn().mockResolvedValue([productData])}));
    }

    let saveData = productData;
    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            providers: [ProductService, {
                provide: getModelToken('Product'),
                useValue: product
            }],
        }).compile();

        productsService = app.get<ProductService>(ProductService);
    });

    describe('root',() => {
        it('should save products', async () => {
            const data = await productsService.addProduct(productData);
            saveData = productData;
            expect(data).toBeTruthy();
            expect(data.productId).toBeTruthy();
            expect(data.createdOn).toBeTruthy();
        });
    });

    describe('root',() => {

        it('should find products', async () => {
            const data = await productsService.getProducts();
            expect(data).toEqual([saveData]);
        });
    });
});
