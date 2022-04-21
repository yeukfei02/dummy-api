import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import helmet from 'helmet';
import compression from 'compression';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  // middleware
  app.use(helmet());
  app.use(compression());

  // swagger
  const config = new DocumentBuilder()
    .setTitle('dummy-api')
    .setDescription('dummy-api documentation')
    .setVersion('1.0')
    .addTag('dummy-api')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
