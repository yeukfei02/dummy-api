import { Controller, Post, Get, Body, Query } from '@nestjs/common';
import { TagService } from './tag.service';
import { CreateTagDto } from './dto/createTag.dto';

@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Post()
  async createTag(@Body() createTagDto: CreateTagDto): Promise<any> {
    const tag = await this.tagService.createTag(createTagDto);

    const response = { message: 'createTag', tag: tag };
    return response;
  }

  @Get()
  async getTags(
    @Query('page') page: string,
    @Query('per_page') perPage: string,
  ): Promise<any> {
    const pageInt = page ? parseInt(page, 10) : 1;
    const perPageInt = page ? parseInt(perPage, 10) : 20;

    const tags = await this.tagService.getTags(pageInt, perPageInt);

    const response = {
      message: 'getTags',
      data: tags,
      total: tags.length,
      page: pageInt,
      limit: perPageInt,
    };
    return response;
  }
}
