import { Module, MiddlewareConsumer } from '@nestjs/common';
import { LocationController } from './location.controller';
import { LocationService } from './location.service';
import { PrismaService } from '../prisma.service';
import { AuthMiddleware } from '../auth.middleware';

@Module({
  imports: [],
  controllers: [LocationController],
  providers: [LocationService, PrismaService],
})
export class LocationModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('location');
  }
}
