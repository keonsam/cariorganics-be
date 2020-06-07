import {Field, Float, ID, ObjectType} from "@nestjs/graphql";
import {ProductInput} from "./product.input";

@ObjectType()
export class ProductDto {
    @Field(() => ID)
    productId: string;
    @Field()
    brand: string;
    @Field()
    title: string;
    @Field()
    store: string;
    @Field()
    price: string;
    @Field()
    description: string;
    @Field( () => Float)
    createdOn: number;
    @Field( () => Float)
    modifiedOn: number;

    constructor(product?: ProductInput) {
        this.brand = product.brand;
        this.title = product.title;
        this.store = product.store;
        this.price = product.price;
        this.description = product.description;
    }
}
