import { Injectable } from '@nestjs/common';
import { CreateTagDto } from './dto/createTag.dto';
import { PrismaService } from '../prisma.service';
import { tag } from '@prisma/client';

@Injectable()
export class TagService {
  constructor(private readonly prisma: PrismaService) {}

  async createTag(createTagDto: CreateTagDto): Promise<tag> {
    const tag = await this.prisma.tag.create({
      data: {
        name: createTagDto.name,
        post_id: createTagDto.post_id,
      },
      include: {
        post: true,
      },
    });
    return tag;
  }

  async getTags(postId: string, page: number, perPage: number): Promise<any> {
    let tags = await this.prisma.tag.findMany({
      include: {
        post: true,
      },
      skip: perPage * (page - 1),
      take: perPage,
    });

    if (postId) {
      tags = await this.prisma.tag.findMany({
        where: {
          post_id: postId,
        },
        include: {
          post: true,
        },
        skip: perPage * (page - 1),
        take: perPage,
      });
    }

    return tags;
  }
}
