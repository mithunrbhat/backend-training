import * as mongoose from 'mongoose';
export declare const BookSchema: mongoose.Schema<mongoose.Document<any>, mongoose.Model<mongoose.Document<any>>>;
export interface Book extends mongoose.Document {
    id: string;
    title: string;
    totalPages: number;
    rating: string;
    isbn: number;
    authorId: string;
    publisherId: string;
}
