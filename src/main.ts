import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import compression from 'compression';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  // middleware
  app.use(helmet());
  app.use(compression());

  await app.listen(3000);
}
bootstrap();
