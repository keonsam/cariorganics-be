import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import {CheckoutModule} from "../src/checkout/checkout.module";
import {MongooseModule} from "@nestjs/mongoose";
import {GraphQLModule} from "@nestjs/graphql";
import {AppModule} from "../src/app.module";
import {FakeTestingResolver} from "./fake.testing.resolver";

describe('CheckoutResolver (e2e)', () => {
    let app: INestApplication;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [
                CheckoutModule,
                MongooseModule.forRoot(
                    'mongodb+srv://m001-student:m001-mongodb-basics@cariorganics-test-3ruzv.mongodb.net/cariogranics-test-db?retryWrites=true&w=majority'
                ),
                GraphQLModule.forRoot({
                    autoSchemaFile: 'schema.gql',
                }),
            ],
            providers: [FakeTestingResolver]
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it('mutation checkout', () => {
        const mutate = `
            mutation {
                checkout(
                    checkoutData: {
                        user: {
                            firstName: 'testin',
                            lastName: 'test',
                            email: 'hel',
                            phoneNumber: '42',
                            location: 'fkfk'
                        },
                        enquire: [],
                        products: []
                    }
                ) {
                checkoutId
                user {
                    firstName
                    lastName
                    email
                    phoneNumber
                    location
                }
                status
                createdOn
                }
            }
        `;
        return request(app.getHttpServer())
            .post('/graphql')
            .send({
                query: `
            mutation {
                checkout(
                    checkoutData: {
                        user: {
                            firstName: "testin",
                            lastName: "test",
                            email: "hel",
                            phoneNumber: "42",
                            location: "fkfk"
                        }
                    }
                ) {
                checkoutId
                status
                createdOn
                }
            }
        `,
            })
            .expect(200)
            .expect(({body}) => {
                expect(body).toBeTruthy();
                expect(body.data).toBeTruthy();
                const data = body.data.checkout;
                expect(data.checkoutId).toBeTruthy();
                expect(data.status).toBe('unconfirmed');
                expect(data.createdOn).toBeTruthy();
            });
    });

    afterAll(async () => {
        await app.close();
    });

});
