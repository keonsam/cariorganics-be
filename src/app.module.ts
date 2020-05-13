import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { GraphQLModule } from "@nestjs/graphql";
import {AppResolver} from "./app.resolver";
import {OrderModule} from "./order/order.module";

@Module({
  imports: [
      GraphQLModule.forRoot({
        autoSchemaFile: 'schema.gql',
      }),
      OrderModule
  ],
  // controllers: [AppController],
  providers: [AppResolver],
})
export class AppModule {}
