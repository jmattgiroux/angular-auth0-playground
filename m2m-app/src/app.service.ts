import { Injectable } from '@nestjs/common';
import { ManagementClient } from 'auth0';


@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  constructor(private  managementClient: ManagementClient) {
    this.managementClient = new ManagementClient({
      domain: process.env.DOMAIN,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET
    });
  }
}
