import { Module } from '@nestjs/common';
import { GraphQLModule } from "@nestjs/graphql";
import {AppResolver} from "./app.resolver";
import { MongooseModule } from "@nestjs/mongoose";
import {CheckoutModule} from "./checkout/checkout.module";
import {AppService} from "./app.service";
import {ProductModule} from "./product/product.module";

@Module({
  imports: [
      GraphQLModule.forRoot({
        autoSchemaFile: 'schema.gql',
      }),
      MongooseModule.forRoot(
          'mongodb+srv://m001-student:m001-mongodb-basics@cariorganics-test-3ruzv.mongodb.net/cariogranics-test-app?retryWrites=true&w=majority'
      ),
      CheckoutModule,
      ProductModule
  ],
  // controllers: [AppController],
  providers: [AppResolver, AppService],
})
export class AppModule {}
