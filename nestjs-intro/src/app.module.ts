import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'; 

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from "./products/products.module";


@Module({
  imports: [ProductsModule, MongooseModule.forRoot(
    'mongodb+srv://20030895:20030895@mymongodb.thcr2.mongodb.net/nestjs-demo?retryWrites=true&w=majority'
    )
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
