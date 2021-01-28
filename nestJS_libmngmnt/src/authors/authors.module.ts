import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthorsController } from './authors.controller';
import { AuthorsService } from './authors.service';
import { AuthorSchema } from './author.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Author', schema: AuthorSchema }]),
  ],
  controllers: [AuthorsController],
  providers: [AuthorsService],
})
export class AuthorsModule {}
