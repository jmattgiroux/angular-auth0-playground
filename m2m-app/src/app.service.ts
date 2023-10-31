import {Injectable} from '@nestjs/common';
import {ManagementClient} from "auth0";


@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello World!';
  }

  constructor(private managementClient: ManagementClient) {}
}
