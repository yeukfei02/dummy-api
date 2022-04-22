import { Module, MiddlewareConsumer } from '@nestjs/common';
import { QuoteController } from './quote.controller';
import { QuoteService } from './quote.service';
import { PrismaService } from '../prisma.service';
import { AuthMiddleware } from '../auth.middleware';

@Module({
  imports: [],
  controllers: [QuoteController],
  providers: [QuoteService, PrismaService],
})
export class QuoteModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('quote');
  }
}
