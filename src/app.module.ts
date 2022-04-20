import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { LocationModule } from './location/location.module';
import { PostModule } from './post/post.module';
import { TagModule } from './tag/tag.module';
import { CommentModule } from './comment/comment.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [UserModule, LocationModule, PostModule, TagModule, CommentModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
