import { Module, MiddlewareConsumer } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { PrismaService } from '../prisma.service';
import { AuthMiddleware } from '../auth.middleware';

@Module({
  imports: [],
  controllers: [PostController],
  providers: [PostService, PrismaService],
})
export class PostModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('post');
  }
}
