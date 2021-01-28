import { Model } from 'mongoose';
import { Book } from './book.model';
import { Author } from '../authors/author.model';
import { Publisher } from '../publishers/publisher.model';
export declare class BooksService {
    private readonly bookModel;
    private readonly authorModel;
    private readonly publisherModel;
    constructor(bookModel: Model<Book>, authorModel: Model<Author>, publisherModel: Model<Publisher>);
    includeBook(title: string, totalPages: number, rating: string, isbn: number, authorId: string, publisherId: string): Promise<string>;
    provideAllBooks(sortBy: string | undefined, searchBy: string | undefined): Promise<{
        id: string;
        title: string;
        totalPages: number;
        rating: string;
        isbn: number;
        author: Object;
        publisher: Object;
    }[]>;
    provideOneBook(bookId: string): Promise<{
        id: string;
        title: string;
        totalPages: number;
        rating: string;
        isbn: number;
        author: Object;
        publisher: Object;
    }>;
    removeBook(bookId: string): Promise<void>;
    private findBook;
    private findAuthor;
    private findPublisher;
}
