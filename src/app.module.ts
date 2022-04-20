import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { LocationModule } from './location/location.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [UserModule, LocationModule, PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
