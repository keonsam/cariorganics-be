import {Injectable} from "@nestjs/common";
import {ProductDto} from "./dto/product.dto";
import {ProductInput} from "./dto/product.input";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Product} from "./schemas/product.schema";
import { v4 as uuid} from "uuid";

@Injectable()
export class ProductService {
    constructor(@InjectModel('Product') private readonly productModel: Model<Product>) {
    }
    async getProducts(): Promise<ProductDto[]> {
        return this.productModel.find().exec();
    }

    async addProduct(productData: ProductInput): Promise<ProductDto> {
        const product = new ProductDto(productData);
        product.productId = uuid();
        product.createdOn = Date.now();
        const createdProduct = new this.productModel(product);
        return createdProduct.save();
    }
}
