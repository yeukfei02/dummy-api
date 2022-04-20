import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { LocationModule } from './location/location.module';
import { PostModule } from './post/post.module';
import { TagModule } from './tag/tag.module';

@Module({
  imports: [UserModule, LocationModule, PostModule, TagModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
