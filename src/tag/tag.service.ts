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

  async getTags(): Promise<any> {
    const tags = await this.prisma.tag.findMany({
      include: {
        post: true,
      },
    });
    return tags;
  }
}
