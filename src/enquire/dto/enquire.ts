import {Field, ObjectType} from "@nestjs/graphql";
import {EnquireInput} from "./enquire.input";

@ObjectType()
export class Enquire {
    @Field()
    brand: string;
    @Field()
    name: string;
    @Field()
    store: string;
    constructor(request: EnquireInput) {
        this.brand = request.brand;
        this.name = request.name;
        this.store = request.store;
    }
}
