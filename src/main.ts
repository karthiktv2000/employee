import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import {EmployeeModule} from './employee/employee.module';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  //const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create(EmployeeModule);

  app.useGlobalPipes(new ValidationPipe());
  app.use(cookieParser());
  await app.listen(8000);
}
bootstrap();
