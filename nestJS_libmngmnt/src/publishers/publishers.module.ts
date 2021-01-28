import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PublishersController } from './publishers.controller';
import { PublishersService } from './publishers.service';
import { PublisherSchema } from './publisher.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Publisher', schema: PublisherSchema }]),
  ],
  controllers: [PublishersController],
  providers: [PublishersService],
})
export class PublishersModule {}
