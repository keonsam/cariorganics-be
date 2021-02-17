import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import {CheckoutModule} from "../src/checkout/checkout.module";
import {MongooseModule} from "@nestjs/mongoose";
import {GraphQLModule} from "@nestjs/graphql";
import {FakeTestingResolver} from "./fake.testing.resolver";
import {TEST_DB} from "./test.db";

describe('CheckoutResolver (e2e)', () => {
    let app: INestApplication;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [
                CheckoutModule,
                MongooseModule.forRoot(
                    TEST_DB
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
