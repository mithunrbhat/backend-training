import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Book } from './book.model';
import { Author } from '../authors/author.model';
import { Publisher } from '../publishers/publisher.model';

@Injectable()
export class BooksService {
  // private books: Book[] = [];

  constructor(
    @InjectModel('Book') private readonly bookModel: Model<Book>,
    @InjectModel('Author') private readonly authorModel: Model<Author>,
    @InjectModel('Publisher') private readonly publisherModel: Model<Publisher>,
  ) {}

  async includeBook(
    title: string,
    totalPages: number,
    rating: string,
    isbn: number,
    authorId: string,
    publisherId: string,
  ) {
    const newBook = new this.bookModel({
      title,
      totalPages,
      rating,
      isbn,
      authorId,
      publisherId,
    });
    const result = await newBook.save();
    return result.id;
  }

  async provideAllBooks(
    sortBy: string | undefined,
    searchBy: string | undefined,
  ) {
    let books: Book[] = [];

    if (sortBy !== undefined) {
      enum sortValue {
        asc = 1,
        desc = -1,
        undefined = 1,
      }
      let sortObj = {};
      let sortArr: Array<string> | Array<Array<string>> = sortBy.split(',');
      sortArr = sortArr.map((item) => item.split('_'));
      for (let i = 0; i < sortArr.length; i++) {
        const key = sortArr[i][0];
        const value = sortArr[i][1];
        sortObj[key] = sortValue[value];
      }
      books = await this.bookModel.find().sort(sortObj).exec();
    } else if (searchBy !== undefined) {
      let searchArr = searchBy.split('_');
      let searchObj = {};
      searchObj[searchArr[0]] = searchArr[1];
      books = await this.bookModel.find(searchObj).exec();
    } else {
      books = await this.bookModel.find().exec();
    }
    return await Promise.all(
      books.map(async (bk) => {
        const author = await this.findAuthor(bk.authorId);
        const publisher = await this.findPublisher(bk.publisherId);
        return {
          id: bk.id,
          title: bk.title,
          totalPages: bk.totalPages,
          rating: bk.rating,
          isbn: bk.isbn,
          author,
          publisher,
        };
      }),
    );
  }

  async provideOneBook(bookId: string) {
    const book = await this.findBook(bookId);
    return {
      id: book.id,
      title: book.title,
      totalPages: book.totalPages,
      rating: book.rating,
      isbn: book.isbn,
      author: await this.findAuthor(book.authorId),
      publisher: await this.findPublisher(book.publisherId),
    };
  }

  async removeBook(bookId: string) {
    const result = await this.bookModel.deleteOne({ _id: bookId }).exec();
    if (result.n === 0) {
      throw new NotFoundException('Could not find!!');
    }
  }

  private async findBook(id: string): Promise<Book> {
    let book;
    try {
      book = await this.bookModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find!!');
    }
    if (!book) {
      throw new NotFoundException('Could not Find!!');
    }
    return book;
  }

  private async findAuthor(id: string): Promise<Object> {
    let author;
    try {
      author = await this.authorModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find!!');
    }
    if (!author) {
      throw new NotFoundException('Could not Find!!');
    }
    return {
      id: author.id,
      name: author.name,
      email: author.email,
      dob: author.dob,
    };
  }

  private async findPublisher(id: string): Promise<Object> {
    let publisher;
    try {
      publisher = await this.publisherModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find!!');
    }
    if (!publisher) {
      throw new NotFoundException('Could not Find!!');
    }
    return {
      id: publisher.id,
      name: publisher.name,
      email: publisher.email,
      contact: publisher.contact,
      established: publisher.established,
    };
  }
}
