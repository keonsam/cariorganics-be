import {Field, InputType} from "@nestjs/graphql";

@InputType()
export class ProductInput {
    @Field({nullable: true})
    brand: string;
    @Field()
    name: string;
    @Field({nullable: true})
    store: string;
    @Field( {nullable: true})
    price: string;
    @Field({nullable: true})
    description: string;
}
