import * as mongoose from 'mongoose';
export declare const PublisherSchema: mongoose.Schema<mongoose.Document<any>, mongoose.Model<mongoose.Document<any>>>;
export interface Publisher extends mongoose.Document {
    id: string;
    name: string;
    email: string;
    contact: string;
    established: number;
}
