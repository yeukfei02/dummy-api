import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
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
  async getComments(): Promise<any> {
    const comments = await this.commentService.getComments();

    const response = { message: 'getComments', comments: comments };
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
