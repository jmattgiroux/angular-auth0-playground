import {Injectable} from '@nestjs/common';
import {ManagementClient} from "auth0";


@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello World!';
  }

  async getUsers(req, res) {
      const result = await this.managementClient.users.getAll();
      res.json({ message: result });
  }

  constructor(private managementClient: ManagementClient) {}
}
