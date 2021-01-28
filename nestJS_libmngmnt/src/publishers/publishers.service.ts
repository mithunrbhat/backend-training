import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Publisher } from './publisher.model';

@Injectable()
export class PublishersService {
  // private publishers: Publisher[] = [];
  constructor(
    @InjectModel('Publisher') private readonly publisherModel: Model<Publisher>,
  ) {}

  async includePublisher(
    name: string,
    email: string,
    contact: string,
    established: number,
  ) {
    // const publisherId = Math.random().toString();
    const newPublisher = new this.publisherModel({
      name,
      email,
      contact,
      established,
    });
    const result = await newPublisher.save();
    return result.id;
  }

  async provideAllPublishers() {
    const publishers = await this.publisherModel.find().exec();
    return publishers.map((pub) => ({
      id: pub.id,
      name: pub.name,
      email: pub.email,
      contact: pub.contact,
      established: pub.established,
    }));
  }

  async provideOnePublisher(publisherId: string) {
    const publisher = await this.findPublisher(publisherId);
    return {
      id: publisher.id,
      name: publisher.name,
      email: publisher.email,
      contact: publisher.contact,
      established: publisher.established,
    };
  }

  async removePublisher(publisherId: string) {
    const result = await this.publisherModel
      .deleteOne({ _id: publisherId })
      .exec();
    if (result.n === 0) {
      throw new NotFoundException('Could not find!!');
    }
  }

  private async findPublisher(id: string): Promise<Publisher> {
    let publisher;
    try {
      publisher = await this.publisherModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find!!');
    }
    if (!publisher) {
      throw new NotFoundException('Could not Find!!');
    }
    return publisher;
  }
}
