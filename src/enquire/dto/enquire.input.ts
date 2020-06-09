import {Field, InputType} from "@nestjs/graphql";

@InputType()
export class EnquireInput {
    @Field()
    brand: string;
    @Field()
    name: string;
    @Field()
    store: string
}
