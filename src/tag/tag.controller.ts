import { Controller, Post, Get, Body } from '@nestjs/common';
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
  async getTags(): Promise<any> {
    const tags = await this.tagService.getTags();

    const response = { message: 'getTags', tags: tags };
    return response;
  }
}
