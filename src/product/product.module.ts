import { Module } from '@nestjs/common';
import {ProductService} from "./product.service";
import {MongooseModule} from "@nestjs/mongoose";
import {ProductSchema} from "./schemas/product.schema";
import {ProductResolver} from "./product.resolver";

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'Product', schema: ProductSchema}])
    ],
    providers: [ProductResolver, ProductService],
})
export class ProductModule {}
