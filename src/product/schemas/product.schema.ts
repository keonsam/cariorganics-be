import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";

@Schema()
export class Product extends Document {
    @Prop()
    productId: string;
    @Prop()
    brand: string;
    @Prop()
    title: string;
    @Prop()
    store: string;
    @Prop()
    price: number;
    @Prop()
    description: string;
    @Prop()
    createdOn: number;
    @Prop()
    modifiedOn: number;
}
export const ProductSchema = SchemaFactory.createForClass(Product);
