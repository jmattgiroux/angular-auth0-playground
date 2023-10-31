import { Injectable } from '@nestjs/common';
import { ManagementClient } from 'auth0';
import {ConfigService} from "@nestjs/config";


@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  constructor(private config: ConfigService) {
    const domain = process.env.DOMAIN;
    // this.managementClient = new ManagementClient({
    //   domain: domain,
    //   clientId: process.env.CLIENT_ID,
    //   clientSecret: process.env.CLIENT_SECRET
    // });
  }
}
