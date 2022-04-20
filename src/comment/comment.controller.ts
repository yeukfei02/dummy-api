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

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  async createComment(
    @Body() createCommentDto: CreateCommentDto,
  ): Promise<any> {
    const comment = await this.commentService.createComment(createCommentDto);

    const response = { message: 'createComment', comment: comment };
    return response;
  }

  @Get()
  async getComments(
    @Query('page') page: string,
    @Query('per_page') perPage: string,
  ): Promise<any> {
    const pageInt = page ? parseInt(page, 10) : 1;
    const perPageInt = page ? parseInt(perPage, 10) : 20;

    const comments = await this.commentService.getComments(pageInt, perPageInt);

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
  async getCommentById(@Param('id') id: string): Promise<any> {
    const comment = await this.commentService.getCommentById(id);

    const response = { message: 'getCommentById', comment: comment };
    return response;
  }

  @Put('/:id')
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
  async deleteCommentById(@Param('id') id: string): Promise<any> {
    const comment = await this.commentService.deleteCommentById(id);

    const response = { message: 'deleteCommentById', comment: comment };
    return response;
  }
}
