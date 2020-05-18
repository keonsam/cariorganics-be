import { Module } from '@nestjs/common';
import { GraphQLModule } from "@nestjs/graphql";
import {AppResolver} from "./app.resolver";
import { MongooseModule } from "@nestjs/mongoose";
import {CheckoutModule} from "./checkout/checkout.module";

@Module({
  imports: [
      GraphQLModule.forRoot({
        autoSchemaFile: 'schema.gql',
      }),
      MongooseModule.forRoot(
          'mongodb+srv://m001-student:m001-mongodb-basics@cariorganics-test-3ruzv.mongodb.net/cariogranics-test-db?retryWrites=true&w=majority'
      ),
      CheckoutModule
  ],
  // controllers: [AppController],
  providers: [AppResolver],
})
export class AppModule {}
