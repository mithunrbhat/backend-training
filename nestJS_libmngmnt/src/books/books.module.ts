import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { BookSchema } from './book.model';

import { AuthorSchema } from '../authors/author.model';
import { PublisherSchema } from '../publishers/publisher.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Book', schema: BookSchema },
      { name: 'Author', schema: AuthorSchema },
      { name: 'Publisher', schema: PublisherSchema },
    ]),
  ],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
