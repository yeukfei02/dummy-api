import { Module, MiddlewareConsumer } from '@nestjs/common';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { PrismaService } from '../prisma.service';
import { AuthMiddleware } from '../auth.middleware';

@Module({
  imports: [],
  controllers: [CartController],
  providers: [CartService, PrismaService],
})
export class CartModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('cart');
  }
}
