import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from "@nestjs/config";
import { ManagementClient } from "auth0";

@Module({
  imports: [ConfigModule.forRoot(), ManagementClient],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
