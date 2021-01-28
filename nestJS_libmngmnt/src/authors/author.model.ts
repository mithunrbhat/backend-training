import * as mongoose from 'mongoose';

export const AuthorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  dob: { type: String, required: true },
});

export interface Author extends mongoose.Document {
  id: string;
  name: string;
  email: string;
  dob: string;
}
