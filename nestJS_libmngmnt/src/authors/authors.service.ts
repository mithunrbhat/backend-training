import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Author } from './author.model';

@Injectable()
export class AuthorsService {
  // private authors: Author[] = [];

  constructor(
    @InjectModel('Author') private readonly authorModel: Model<Author>,
  ) {}

  async includeAuthor(name: string, email: string, dob: string) {
    const newAuthor = new this.authorModel({ name, email, dob });
    const result = await newAuthor.save();
    return result.id;
  }

  async provideAllAuthors() {
    const authors = await this.authorModel.find().exec();
    return authors.map((auth) => ({
      id: auth.id,
      name: auth.name,
      email: auth.email,
      dob: auth.dob,
    }));
  }

  async provideOneAuthor(authorId: string) {
    const author = await this.findAuthor(authorId);
    return {
      id: author.id,
      name: author.name,
      email: author.email,
      dob: author.dob,
    };
  }

  async removeAuthor(authorId: string) {
    const result = await this.authorModel.deleteOne({ _id: authorId }).exec();
    if (result.n === 0) {
      throw new NotFoundException('Could not find!!');
    }
  }

  private async findAuthor(id: string): Promise<Author> {
    let author;
    try {
      author = await this.authorModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find!!');
    }
    if (!author) {
      throw new NotFoundException('Could not Find!!');
    }
    return author;
  }
}
