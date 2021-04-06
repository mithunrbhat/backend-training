import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  async getBlogger(@Param('id') blogerID: number): Promise<string> {
    return this.appService.runSample(blogerID);
  }
}
