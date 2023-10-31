import {Injectable} from '@nestjs/common';
import {ManagementClient} from "auth0";


@Injectable()
export class AppService {
  managementClient: ManagementClient;

  getHello(): string {
    return 'Hello World!';
  }

  constructor() {
    const domain = process.env.DOMAIN;
    console.log(`domain: ${domain}`)
    const ManagementClient = require('auth0').ManagementClient;
    this.managementClient = new ManagementClient({
      domain: process.env.DOMAIN,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET
    })
  }
}
