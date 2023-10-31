import { Injectable } from '@nestjs/common';
import {ConfigService} from "@nestjs/config";


@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  constructor() {
    const domain = process.env.DOMAIN;
    console.log(`domain: ${domain}`)
    // this.managementClient = new ManagementClient({
    //   domain: domain,
    //   clientId: process.env.CLIENT_ID,
    //   clientSecret: process.env.CLIENT_SECRET
    // });
  }
}
