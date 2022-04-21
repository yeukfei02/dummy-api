import { Controller, Post, Get, Body, Query } from '@nestjs/common';
import { TagService } from './tag.service';
import { CreateTagDto } from './dto/createTag.dto';

import {
  ApiBearerAuth,
  ApiHeader,
  ApiQuery,
  ApiResponse,
} from '@nestjs/swagger';
import { CreateTagResponse } from './response/createTag.response';
import { GetTagsResponse } from './response/getTags.response';

@ApiBearerAuth()
@ApiHeader({
  name: 'Authorization',
  description: 'Jwt Token',
})
@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'Successful response',
    type: CreateTagResponse,
  })
  async createTag(@Body() createTagDto: CreateTagDto): Promise<any> {
    const tag = await this.tagService.createTag(createTagDto);

    const response = { message: 'createTag', tag: tag };
    return response;
  }

  @Get()
  @ApiQuery({
    name: 'post_id',
    description: 'post_id',
    required: false,
    type: String,
  })
  @ApiQuery({
    name: 'page',
    description: 'page',
    required: false,
    type: String,
  })
  @ApiQuery({
    name: 'per_page',
    description: 'per_page',
    required: false,
    type: String,
  })
  @ApiResponse({
    status: 200,
    description: 'Successful response',
    type: GetTagsResponse,
  })
  async getTags(
    @Query('post_id') post_id: string,
    @Query('page') page: string,
    @Query('per_page') perPage: string,
  ): Promise<any> {
    const postId = post_id;
    const pageInt = page ? parseInt(page, 10) : 1;
    const perPageInt = page ? parseInt(perPage, 10) : 20;

    const tags = await this.tagService.getTags(postId, pageInt, perPageInt);

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
