import * as mongoose from 'mongoose';
export declare const AuthorSchema: mongoose.Schema<mongoose.Document<any>, mongoose.Model<mongoose.Document<any>>>;
export interface Author extends mongoose.Document {
    id: string;
    name: string;
    email: string;
    dob: string;
}
