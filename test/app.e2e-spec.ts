import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import {GraphQLModule} from "@nestjs/graphql";
import {MongooseModule} from "@nestjs/mongoose";
import {CheckoutModule} from "../src/checkout/checkout.module";
import {AppResolver} from "../src/app.resolver";
import {AppService} from "../src/app.service";

describe('AppResolver (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        GraphQLModule.forRoot({
          autoSchemaFile: 'schema.gql',
        }),
        MongooseModule.forRoot(
            'mongodb+srv://m001-student:m001-mongodb-basics@cariorganics-test-3ruzv.mongodb.net/cariogranics-test-db?retryWrites=true&w=majority'
        ),
        CheckoutModule
      ],
      providers: [AppResolver, AppService],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('query helloWord', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .send({
        operationName: null,
        query: `
        query {
        helloWorld
        }
        `
      })
      .expect(200)
      .expect(({body}) => {
        expect(body).toBeTruthy();
        expect(body.data).toBeTruthy();
        const data = body.data.helloWorld;
        expect(data).toBe('Hello World!');
      });
  });

  afterAll(async () => {
    await app.close();
  });

});
