import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import {MongooseModule} from "@nestjs/mongoose";
import {GraphQLModule} from "@nestjs/graphql";
import {ProductModule} from "../src/product/product.module";

describe('CheckoutResolver (e2e)', () => {
    let app: INestApplication;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [
                ProductModule,
                MongooseModule.forRoot(
                    'mongodb+srv://m001-student:m001-mongodb-basics@cariorganics-test-3ruzv.mongodb.net/cariogranics-test-db?retryWrites=true&w=majority'
                ),
                GraphQLModule.forRoot({
                    autoSchemaFile: 'schema.gql',
                }),
            ],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it('mutation addProduct', () => {
        const mutate = `
            mutation {
                addProduct(
                    productData: {
                        brand: "test",
                        name: "testing",
                        store: "store A",
                        price: "25.3",
                        description: "a desc"
                    }
                ) {
                productId
                name
                brand
                store
                price
                description
                createdOn
                }
            }
        `;
        return request(app.getHttpServer())
            .post('/graphql')
            .send({
                query: mutate,
            })
            .expect(200)
            .expect(({body}) => {
                expect(body).toBeTruthy();
                expect(body.data).toBeTruthy();
                const data = body.data.addProduct;
                expect(data.productId).toBeTruthy();
                expect(data.name).toBeTruthy();
                expect(data.brand).toBeTruthy();
                expect(data.store).toBeTruthy();
                expect(data.price).toBeTruthy();
                expect(data.description).toBeTruthy();
                expect(data.createdOn).toBeTruthy();
            });
    });

    it('query getProducts', () => {
        const query = `
            query {
                getProducts {
                productId
                name
                brand
                store
                price
                description
                createdOn
                }
            }
        `;
        return request(app.getHttpServer())
            .post('/graphql')
            .send({
                query: query,
            })
            .expect(200)
            .expect(({body}) => {
                expect(body).toBeTruthy();
                expect(body.data).toBeTruthy();
                const data = body.data.getProducts;
                expect(data).toBeTruthy();
                expect(data.length).toBeGreaterThanOrEqual(1);
            });
    });

    afterAll(async () => {
        await app.close();
    });
});