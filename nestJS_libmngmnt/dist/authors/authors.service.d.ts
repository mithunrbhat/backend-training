import { Model } from 'mongoose';
import { Author } from './author.model';
export declare class AuthorsService {
    private readonly authorModel;
    constructor(authorModel: Model<Author>);
    includeAuthor(name: string, email: string, dob: string): Promise<string>;
    provideAllAuthors(): Promise<{
        id: string;
        name: string;
        email: string;
        dob: string;
    }[]>;
    provideOneAuthor(authorId: string): Promise<{
        id: string;
        name: string;
        email: string;
        dob: string;
    }>;
    removeAuthor(authorId: string): Promise<void>;
    private findAuthor;
}
