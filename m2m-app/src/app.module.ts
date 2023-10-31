import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ManagementClient } from "auth0";

@Module({
  imports: [ManagementClient],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
