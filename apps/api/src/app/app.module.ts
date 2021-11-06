import { Module } from '@nestjs/common';
import { CoreModule } from '@lost-cities/core';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '@lost-cities/user';

@Module({
  imports: [CoreModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
