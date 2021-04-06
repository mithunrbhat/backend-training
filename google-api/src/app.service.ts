import { Injectable } from '@nestjs/common';

const { google } = require('googleapis');

@Injectable()
export class AppService {
  blogger = google.blogger({
    version: 'v3',
    auth: 'AIzaSyD1zhkVgul5158SiSjIrQgGEpecyUDQ5BQ',
  });

  async runSample(blogerID: number): Promise<string> {
    const res = await this.blogger.blogs.get({ blogId: blogerID });
    return `${res.data.name} has ${res.data.posts.totalItems} posts! The blog url is ${res.data.url}`;
  }
  // runSample().catch(console.error);
}
