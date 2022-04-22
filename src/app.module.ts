import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { UserModule } from './user/user.module';
import { LocationModule } from './location/location.module';
import { PostModule } from './post/post.module';
import { TagModule } from './tag/tag.module';
import { CommentModule } from './comment/comment.module';
import { TodoModule } from './todo/todo.module';
import { QuoteModule } from './quote/quote.module';

@Module({
  imports: [
    LoginModule,
    UserModule,
    LocationModule,
    PostModule,
    TagModule,
    CommentModule,
    TodoModule,
    QuoteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
