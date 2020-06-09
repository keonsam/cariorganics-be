import {Field, InputType} from "@nestjs/graphql";
// import { GraphQLUpload, FileUpload } from 'graphql-upload';

@InputType()
export class ProductInput {
    @Field({nullable: true})
    brand: string;
    @Field()
    title: string;
    @Field({nullable: true})
    store: string;
    @Field( {nullable: true})
    price: string;
    @Field({nullable: true})
    description: string;
    // @Field( ()=> GraphQLUpload,{nullable: true})
    // file: FileUpload;
}
