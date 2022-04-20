import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { PrismaService } from '../prisma.service';

@Module({
  imports: [],
  controllers: [CommentController],
  providers: [CommentService, PrismaService],
})
export class CommentModule {}
