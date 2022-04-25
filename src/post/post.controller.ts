import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

import {
  ApiBearerAuth,
  ApiHeader,
  ApiQuery,
  ApiResponse,
} from '@nestjs/swagger';
import { CreatePostResponse } from './response/create-post.response';
import { GetPostsResponse } from './response/get-posts.response';
import { GetPostByIdResponse } from './response/get-post-by-id.response';
import { UpdatePostByIdResponse } from './response/update-post-by-id.response';
import { DeletePostByIdResponse } from './response/delete-post-by-id.response';

@ApiBearerAuth()
@ApiHeader({
  name: 'Authorization',
  description: 'Jwt Token',
})
@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'Successful response',
    type: CreatePostResponse,
  })
  async createPost(@Body() createPostDto: CreatePostDto): Promise<any> {
    const post = await this.postService.createPost(createPostDto);

    const response = { message: 'createPost', post: post };
    return response;
  }

  @Get()
  @ApiQuery({
    name: 'users_id',
    description: 'users_id',
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
    type: GetPostsResponse,
  })
  async getPosts(
    @Query('users_id') users_id: string,
    @Query('page') page: string,
    @Query('per_page') perPage: string,
  ): Promise<any> {
    const usersId = users_id;
    const pageInt = page ? parseInt(page, 10) : 1;
    const perPageInt = page ? parseInt(perPage, 10) : 20;

    const posts = await this.postService.getPosts(usersId, pageInt, perPageInt);

    const response = {
      message: 'getPosts',
      data: posts,
      total: posts.length,
      page: pageInt,
      limit: perPageInt,
    };
    return response;
  }

  @Get('/:id')
  @ApiResponse({
    status: 200,
    description: 'Successful response',
    type: GetPostByIdResponse,
  })
  async getPostById(@Param('id') id: string): Promise<any> {
    const post = await this.postService.getPostById(id);

    const response = { message: 'getPostById', post: post };
    return response;
  }

  @Put('/:id')
  @ApiResponse({
    status: 200,
    description: 'Successful response',
    type: UpdatePostByIdResponse,
  })
  async updatePostById(
    @Param('id') id: string,
    @Body() updatePostDto: UpdatePostDto,
  ): Promise<any> {
    const post = await this.postService.updatePostById(id, updatePostDto);

    const response = { message: 'updatePostById', post: post };
    return response;
  }

  @Delete('/:id')
  @ApiResponse({
    status: 200,
    description: 'Successful response',
    type: DeletePostByIdResponse,
  })
  async deletePostById(@Param('id') id: string): Promise<any> {
    const post = await this.postService.deletePostById(id);

    const response = { message: 'deletePostById', post: post };
    return response;
  }
}
