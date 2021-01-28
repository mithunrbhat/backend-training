import { Book } from './books/book.model';
import { Author } from './authors/author.model';
import { Publisher } from './publishers/publisher.model';
export declare class Library {
    books: Book[];
    authors: Author[];
    publishers: Publisher[];
    constructor(books: Book[], authors: Author[], publishers: Publisher[]);
}
