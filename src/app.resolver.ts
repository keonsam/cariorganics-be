import {Query, Resolver} from "@nestjs/graphql";

@Resolver()
export class AppResolver {
    constructor() {
    }

    @Query( () => String)
    async helloWorld(): Promise<string> {
        return 'Hello World!';
    }
}
