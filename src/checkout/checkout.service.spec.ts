import { Test, TestingModule } from '@nestjs/testing';
import {CheckoutService} from "./checkout.service";
import {getModelToken} from "@nestjs/mongoose";
import {CheckoutDto} from "./dto/checkout.dto";

describe('CheckoutService', () => {
    let checkoutService: CheckoutService;
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

     function checkout (dto: CheckoutDto) {
        this.data = dto;
        this.save  = () => {
            return this.data;
        };
    }
    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            providers: [CheckoutService, {
                provide: getModelToken('Checkout'),
                useValue: checkout
            }],
        }).compile();

        checkoutService = app.get<CheckoutService>(CheckoutService);
    });

    describe('root',() => {
        it('should create checkout', async () => {
            const data = await checkoutService.checkout(checkoutData);
            expect(data.checkoutId).toBeTruthy();
            expect(data.status).toBe('unconfirmed');
            expect(data.createdOn).toBeTruthy();
        });
    });
});
