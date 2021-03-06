import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

import {
  ApiBearerAuth,
  ApiHeader,
  ApiQuery,
  ApiResponse,
} from '@nestjs/swagger';
import { CreateCommentResponse } from './response/create-comment.response';
import { GetCommentsResponse } from './response/get-comments.response';
import { GetCommentByIdResponse } from './response/get-comment-by-id.response';
import { UpdateCommentByIdResponse } from './response/update-comment-by-id.response';
import { DeleteCommentByIdResponse } from './response/delete-comment-by-id.response';

@ApiBearerAuth()
@ApiHeader({
  name: 'Authorization',
  description: 'Jwt Token',
})
@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'Successful response',
    type: CreateCommentResponse,
  })
  async createComment(
    @Body() createCommentDto: CreateCommentDto,
  ): Promise<any> {
    const comment = await this.commentService.createComment(createCommentDto);

    const response = { message: 'createComment', comment: comment };
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
    type: GetCommentsResponse,
  })
  async getComments(
    @Query('users_id') usersId: string,
    @Query('page') page: string,
    @Query('per_page') perPage: string,
  ): Promise<any> {
    const pageInt = page ? parseInt(page, 10) : 1;
    const perPageInt = page ? parseInt(perPage, 10) : 20;

    const comments = await this.commentService.getComments(
      usersId,
      pageInt,
      perPageInt,
    );

    const response = {
      message: 'getComments',
      data: comments,
      total: comments.length,
      page: pageInt,
      limit: perPageInt,
    };
    return response;
  }

  @Get('/:id')
  @ApiResponse({
    status: 200,
    description: 'Successful response',
    type: GetCommentByIdResponse,
  })
  async getCommentById(@Param('id') id: string): Promise<any> {
    const comment = await this.commentService.getCommentById(id);

    const response = { message: 'getCommentById', comment: comment };
    return response;
  }

  @Put('/:id')
  @ApiResponse({
    status: 200,
    description: 'Successful response',
    type: UpdateCommentByIdResponse,
  })
  async updateCommentById(
    @Param('id') id: string,
    @Body() updateCommentDto: UpdateCommentDto,
  ): Promise<any> {
    const comment = await this.commentService.updateCommentById(
      id,
      updateCommentDto,
    );

    const response = { message: 'updateCommentById', comment: comment };
    return response;
  }

  @Patch('/:id')
  @ApiResponse({
    status: 200,
    description: 'Successful response',
    type: UpdateCommentByIdResponse,
  })
  async patchCommentById(
    @Param('id') id: string,
    @Body() updateCommentDto: UpdateCommentDto,
  ): Promise<any> {
    const comment = await this.commentService.updateCommentById(
      id,
      updateCommentDto,
    );

    const response = { message: 'updateCommentById', comment: comment };
    return response;
  }

  @Delete('/:id')
  @ApiResponse({
    status: 200,
    description: 'Successful response',
    type: DeleteCommentByIdResponse,
  })
  async deleteCommentById(@Param('id') id: string): Promise<any> {
    const comment = await this.commentService.deleteCommentById(id);

    const response = { message: 'deleteCommentById', comment: comment };
    return response;
  }
}
