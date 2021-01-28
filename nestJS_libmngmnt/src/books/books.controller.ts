import {
  Controller,
  Delete,
  Get,
  Post,
  Body,
  Param,
  Query,
} from '@nestjs/common';

import { Book } from './book.model';
import { BooksService } from './books.service';

@Controller('book')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  async addBook(
    @Body('title') bookName: string,
    @Body('totalPages') bookPages: number,
    @Body('rating') bookRating: string,
    @Body('isbn') bookIsbn: number,
    @Body('authorId') authorId: string,
    @Body('publisherId') publisherId: string,
  ) {
    const generatedId = await this.booksService.includeBook(
      bookName,
      bookPages,
      bookRating,
      bookIsbn,
      authorId,
      publisherId,
    );
    return { id: generatedId };
  }

  @Get()
  async getBooks(
    @Query('sort') sortBy: string,
    @Query('search') searchBy: string,
  ) {
    const books = await this.booksService.provideAllBooks(sortBy, searchBy);
    return books;
  }

  @Get(':id')
  async getOneBook(@Param('id') bookId: string) {
    const book = await this.booksService.provideOneBook(bookId);
    return book;
  }

  @Delete(':id')
  async deleteBook(@Param('id') bookId: string): Promise<null> {
    await this.booksService.removeBook(bookId);
    return null;
  }
}
