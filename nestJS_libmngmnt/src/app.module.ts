import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';

import { BooksModule } from './books/books.module';
import { AuthorsModule } from './authors/authors.module';
import { PublishersModule } from './publishers/publishers.module';

@Module({
  imports: [
    BooksModule,
    // AuthorsModule,
    // PublishersModule,
    MongooseModule.forRoot(
      'mongodb+srv://20030895:20030895@mymongodb.thcr2.mongodb.net/libmngmnt?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
