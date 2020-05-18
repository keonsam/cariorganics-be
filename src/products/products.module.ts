import { Module } from '@nestjs/common';
import {ProductsService} from "./products.service";

@Module({
    imports: [],
    providers: [ProductsModule, ProductsService],
})
export class ProductsModule {}
