import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/createComment.dto';
import { UpdateCommentDto } from './dto/updateComment.dto';
import { PrismaService } from '../prisma.service';
import { comment } from '@prisma/client';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

@Injectable()
export class CommentService {
  constructor(private readonly prisma: PrismaService) {}

  async createComment(createCommentDto: CreateCommentDto): Promise<comment> {
    const comments = await this.prisma.comment.create({
      data: {
        message: createCommentDto.message,
        publish_date: dayjs(createCommentDto.publish_date)
          .tz('Asia/Hong_Kong')
          .toISOString(),
        users_id: createCommentDto.users_id,
        post_id: createCommentDto.post_id,
      },
      include: {
        owners: true,
        post: true,
      },
    });
    return comments;
  }

  async getComments(pageInt: number, perPageInt: number): Promise<any> {
    const comments = await this.prisma.comment.findMany({
      include: {
        owners: true,
        post: true,
      },
      skip: perPageInt * (pageInt - 1),
      take: perPageInt,
    });
    return comments;
  }

  async getCommentById(id: string): Promise<any> {
    const comment = await this.prisma.comment.findUnique({
      where: {
        id: id,
      },
      include: {
        owners: true,
        post: true,
      },
    });
    return comment;
  }

  async updateCommentById(id: string, updateCommentDto: UpdateCommentDto) {
    const comment = await this.prisma.comment.update({
      where: {
        id: id,
      },
      data: {
        message: updateCommentDto.message,
        publish_date: dayjs(updateCommentDto.publish_date)
          .tz('Asia/Hong_Kong')
          .toISOString(),
        users_id: updateCommentDto.users_id,
        post_id: updateCommentDto.post_id,
      },
      include: {
        owners: true,
        post: true,
      },
    });
    return comment;
  }

  async deleteCommentById(id: string): Promise<any> {
    const comment = await this.prisma.comment.delete({
      where: {
        id: id,
      },
      include: {
        owners: true,
        post: true,
      },
    });
    return comment;
  }
}
