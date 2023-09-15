import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import {DocumentBuilder,SwaggerCustomOptions,SwaggerModule,} from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
// import { join } from 'path';
// import helmet from 'helmet';
import * as bodyParser from 'body-parser';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.enableCors();
  
  // app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  
  const config = new DocumentBuilder()
  .setTitle('Cats example')
  .setDescription('The cats API description')
  .setVersion('1.0')
  .addTag('cats')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  await app.listen(3001);
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
}
bootstrap();
