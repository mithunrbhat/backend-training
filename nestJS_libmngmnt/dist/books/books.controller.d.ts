import { BooksService } from './books.service';
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    addBook(bookName: string, bookPages: number, bookRating: string, bookIsbn: number, authorId: string, publisherId: string): Promise<{
        id: string;
    }>;
    getBooks(sortBy: string, searchBy: string): Promise<{
        id: string;
        title: string;
        totalPages: number;
        rating: string;
        isbn: number;
        author: Object;
        publisher: Object;
    }[]>;
    getOneBook(bookId: string): Promise<{
        id: string;
        title: string;
        totalPages: number;
        rating: string;
        isbn: number;
        author: Object;
        publisher: Object;
    }>;
    deleteBook(bookId: string): Promise<null>;
}
