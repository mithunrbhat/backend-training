import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { PublishersService } from './publishers.service';

@Controller('publisher')
export class PublishersController {
  constructor(private readonly publishersService: PublishersService) {}

  @Post()
  async addPublisher(
    @Body('name') publisherName: string,
    @Body('email') publisherEmail: string,
    @Body('contact') publisherContact: string,
    @Body('established') publisherEstablished: number,
  ) {
    const generatedId = await this.publishersService.includePublisher(
      publisherName,
      publisherEmail,
      publisherContact,
      publisherEstablished,
    );
    return { id: generatedId };
  }

  @Get()
  async getPublishers() {
    const publishers = await this.publishersService.provideAllPublishers();
    return publishers;
  }

  @Get(':id')
  async getOnePublisher(@Param('id') pubId: string) {
    const publisher = await this.publishersService.provideOnePublisher(pubId);
    return publisher;
  }

  @Delete(':id')
  async deletePublisher(@Param('id') pubId: string) {
    await this.publishersService.removePublisher(pubId);
    return null;
  }
}
