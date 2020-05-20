import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';
import {AppResolver} from "./app.resolver";

describe('AppResolver', () => {
    let appResolver: AppResolver;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            providers: [AppResolver, AppService],
        }).compile();

        appResolver = app.get<AppResolver>(AppResolver);
    });

    describe('root',() => {
        it('should return "Hello World!"', async () => {
            const hello = await appResolver.helloWorld();
            expect(hello).toBe('Hello World!');
        });
    });
});
