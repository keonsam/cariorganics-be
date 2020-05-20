import {Query, Resolver} from "@nestjs/graphql";

@Resolver()
export class FakeTestingResolver {
    @Query(() => String)
    async testing(): Promise<string> {
        return 'testing';
    }
}
