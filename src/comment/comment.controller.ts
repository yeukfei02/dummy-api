import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/createComment.dto';
import { UpdateCommentDto } from './dto/updateComment.dto';

import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { CreateCommentResponse } from './response/createComment.response';
import { GetCommentsResponse } from './response/getComments.response';
import { GetCommentByIdResponse } from './response/getCommentById.response';
import { UpdateCommentByIdResponse } from './response/updateCommentById.response';
import { DeleteCommentByIdResponse } from './response/deleteCommentById.response';

@ApiBearerAuth()
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
  @ApiResponse({
    status: 200,
    description: 'Successful response',
    type: GetCommentsResponse,
  })
  async getComments(
    @Query('users_id') users_id: string,
    @Query('page') page: string,
    @Query('per_page') perPage: string,
  ): Promise<any> {
    const usersId = users_id;
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
