import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/createPost.dto';
import { UpdatePostDto } from './dto/updatePost.dto';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  async createPost(@Body() createPostDto: CreatePostDto): Promise<any> {
    const posts = await this.postService.createPost(createPostDto);

    const response = { message: 'createpost', posts: posts };
    return response;
  }

  @Get()
  async getPosts(): Promise<any> {
    const posts = await this.postService.getPosts();

    const response = { message: 'getPosts', posts: posts };
    return response;
  }

  @Get('/:id')
  async getPostById(@Param('id') id: string): Promise<any> {
    const post = await this.postService.getPostById(id);

    const response = { message: 'getPostById', post: post };
    return response;
  }

  @Put('/:id')
  async updatePostById(
    @Param('id') id: string,
    @Body() updatePostDto: UpdatePostDto,
  ): Promise<any> {
    const post = await this.postService.updatePostById(id, updatePostDto);

    const response = { message: 'updatePostById', post: post };
    return response;
  }

  @Delete('/:id')
  async deletePostById(@Param('id') id: string): Promise<any> {
    const post = await this.postService.deletePostById(id);

    const response = { message: 'deletePostById', post: post };
    return response;
  }
}
