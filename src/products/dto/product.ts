import {Field, ID, ObjectType} from "@nestjs/graphql";

@ObjectType()
export class Product {
    @Field(() => ID)
    productId: string;
    @Field()
    brand: string;
    @Field()
    name: string;
    @Field()
    description: string;
}
