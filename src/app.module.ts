import { Module } from '@nestjs/common';
import { RavenModule } from 'nest-raven';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SignupModule } from './signup/signup.module';
import { LoginModule } from './login/login.module';
import { UserModule } from './user/user.module';
import { LocationModule } from './location/location.module';
import { PostModule } from './post/post.module';
import { TagModule } from './tag/tag.module';
import { CommentModule } from './comment/comment.module';
import { TodoModule } from './todo/todo.module';
import { CartModule } from './cart/cart.module';
import { ProductModule } from './product/product.module';
import { QuoteModule } from './quote/quote.module';

@Module({
  imports: [
    SignupModule,
    LoginModule,
    UserModule,
    LocationModule,
    PostModule,
    TagModule,
    CommentModule,
    TodoModule,
    CartModule,
    ProductModule,
    QuoteModule,
    RavenModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
