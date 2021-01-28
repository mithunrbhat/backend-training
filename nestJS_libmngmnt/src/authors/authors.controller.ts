import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { AuthorsService } from './authors.service';

@Controller('author')
export class AuthorsController {
  constructor(private readonly authorService: AuthorsService) {}

  @Post()
  async addAuthor(
    @Body('name') authorName: string,
    @Body('email') authorEmail: string,
    @Body('dob') authorDob: string,
  ) {
    const generatedId = await this.authorService.includeAuthor(
      authorName,
      authorEmail,
      authorDob,
    );
    return { id: generatedId };
  }

  @Get()
  async getAuthors() {
    const books = await this.authorService.provideAllAuthors();
    return books;
  }

  @Get(':id')
  async getOneAuthor(@Param('id') authId: string) {
    const book = await this.authorService.provideOneAuthor(authId);
    return book;
  }

  @Delete(':id')
  async deleteAuthor(@Param('id') authId: string) {
    await this.authorService.removeAuthor(authId);
    return null;
  }
}
