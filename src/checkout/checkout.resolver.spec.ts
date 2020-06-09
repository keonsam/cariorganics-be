import { Test, TestingModule } from '@nestjs/testing';
import {CheckoutResolver} from "./checkout.resolver";
import {CheckoutService} from "./checkout.service";
import { v4 as uuid} from "uuid";

describe('CheckoutResolver', () => {
    let checkoutResolver: CheckoutResolver;
    const checkoutData = {
        user: {
            firstName: 'testin',
            lastName: 'test',
            email: 'hel',
            phoneNumber: '42',
            location: 'fkfk'
        },
        enquire: [],
        products: []
    };
    const checkout = {...checkoutData, checkoutId: uuid(), status: 'unconfirmed', createdOn: Date.now(), modifiedOn: null};
    const checkoutService = {
        checkout: () => checkout
    };
    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            providers: [CheckoutResolver, CheckoutService],
        })
            .overrideProvider(CheckoutService)
            .useValue(checkoutService)
            .compile();

        checkoutResolver = app.get<CheckoutResolver>(CheckoutResolver);
    });

    describe('root',() => {
        it('should return checkout', async () => {
            const data = await checkoutResolver.checkout(checkoutData);
            expect(data).toBe(checkout);
        });
    });
});
