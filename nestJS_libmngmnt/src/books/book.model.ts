import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  totalPages: { type: Number, required: true },
  rating: { type: String, required: true },
  isbn: { type: Number, required: true },
  authorId: { type: String, required: true },
  publisherId: { type: String, required: true },
});

export interface Book extends mongoose.Document {
  id: string;
  title: string;
  totalPages: number;
  rating: string;
  isbn: number;
  authorId: string;
  publisherId: string;
}
