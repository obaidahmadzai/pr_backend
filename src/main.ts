import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

 app.enableCors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
  });

  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder()
    .setTitle('Pr API')
    .setDescription('')
    .setVersion('1.0')
    .addTag('PR')
    .build();


  const document = SwaggerModule.createDocument(app, config);


  SwaggerModule.setup('api', app, document);
  await app.listen(3001);
}
bootstrap();
