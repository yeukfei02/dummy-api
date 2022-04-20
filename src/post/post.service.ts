import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/createPost.dto';
import { UpdatePostDto } from './dto/updatePost.dto';
import { PrismaService } from '../prisma.service';
import { post } from '@prisma/client';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}

  async createPost(createPostDto: CreatePostDto): Promise<post> {
    const posts = await this.prisma.post.create({
      data: {
        text: createPostDto.text,
        image: createPostDto.image,
        likes: createPostDto.likes,
        publish_date: dayjs(createPostDto.publish_date)
          .tz('Asia/Hong_Kong')
          .toISOString(),
        users_id: createPostDto.users_id,
      },
      include: {
        owners: true,
        tags: true,
        comments: true,
      },
    });
    return posts;
  }

  async getPosts(): Promise<any> {
    const posts = await this.prisma.post.findMany({
      include: {
        owners: true,
        tags: true,
        comments: true,
      },
    });
    return posts;
  }

  async getPostById(id: string): Promise<any> {
    const post = await this.prisma.post.findUnique({
      where: {
        id: id,
      },
      include: {
        owners: true,
        tags: true,
        comments: true,
      },
    });
    return post;
  }

  async updatePostById(id: string, updatePostDto: UpdatePostDto) {
    const post = await this.prisma.post.update({
      where: {
        id: id,
      },
      data: {
        text: updatePostDto.text,
        image: updatePostDto.image,
        likes: updatePostDto.likes,
        publish_date: dayjs(updatePostDto.publish_date)
          .tz('Asia/Hong_Kong')
          .toISOString(),
        users_id: updatePostDto.users_id,
      },
      include: {
        owners: true,
        tags: true,
        comments: true,
      },
    });
    return post;
  }

  async deletePostById(id: string): Promise<any> {
    const post = await this.prisma.post.delete({
      where: {
        id: id,
      },
      include: {
        owners: true,
        tags: true,
        comments: true,
      },
    });
    return post;
  }
}
