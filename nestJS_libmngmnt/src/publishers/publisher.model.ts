import * as mongoose from 'mongoose';

export const PublisherSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  contact: { type: String, required: true },
  established: { type: Number, required: true },
});

export interface Publisher extends mongoose.Document {
  id: string;
  name: string;
  email: string;
  contact: string;
  established: number;
}
