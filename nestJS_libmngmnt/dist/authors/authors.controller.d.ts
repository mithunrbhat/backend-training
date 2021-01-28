import { AuthorsService } from './authors.service';
export declare class AuthorsController {
    private readonly authorService;
    constructor(authorService: AuthorsService);
    addAuthor(authorName: string, authorEmail: string, authorDob: string): Promise<{
        id: string;
    }>;
    getAuthors(): Promise<{
        id: string;
        name: string;
        email: string;
        dob: string;
    }[]>;
    getOneAuthor(authId: string): Promise<{
        id: string;
        name: string;
        email: string;
        dob: string;
    }>;
    deleteAuthor(authId: string): Promise<any>;
}
