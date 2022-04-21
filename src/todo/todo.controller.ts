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
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/createTodo.dto';
import { UpdateTodoDto } from './dto/updateTodo.dto';

import {
  ApiBearerAuth,
  ApiHeader,
  ApiQuery,
  ApiResponse,
} from '@nestjs/swagger';
import { CreateTodoResponse } from './response/createTodo.response';
import { GetTodosResponse } from './response/getTodos.response';
import { GetTodoByIdResponse } from './response/getTodoById.response';
import { UpdateTodoByIdResponse } from './response/updateTodoById.response';
import { DeleteTodoByIdResponse } from './response/deleteTodoById.response';

@ApiBearerAuth()
@ApiHeader({
  name: 'Authorization',
  description: 'Jwt Token',
})
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'Successful response',
    type: CreateTodoResponse,
  })
  async createTodo(@Body() createTodoDto: CreateTodoDto): Promise<any> {
    const todo = await this.todoService.createTodo(createTodoDto);

    const response = { message: 'createTodo', todo: todo };
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
    type: GetTodosResponse,
  })
  async getTodos(
    @Query('users_id') users_id: string,
    @Query('page') page: string,
    @Query('per_page') perPage: string,
  ): Promise<any> {
    const usersId = users_id;
    const pageInt = page ? parseInt(page, 10) : 1;
    const perPageInt = page ? parseInt(perPage, 10) : 20;

    const todos = await this.todoService.getTodos(usersId, pageInt, perPageInt);

    const response = {
      message: 'getTodos',
      data: todos,
      total: todos.length,
      page: pageInt,
      limit: perPageInt,
    };
    return response;
  }

  @Get('/:id')
  @ApiResponse({
    status: 200,
    description: 'Successful response',
    type: GetTodoByIdResponse,
  })
  async getTodoById(@Param('id') id: string): Promise<any> {
    const todo = await this.todoService.getTodoById(id);

    const response = { message: 'getTodoById', todo: todo };
    return response;
  }

  @Put('/:id')
  @ApiResponse({
    status: 200,
    description: 'Successful response',
    type: UpdateTodoByIdResponse,
  })
  async updateTodoById(
    @Param('id') id: string,
    @Body() updateTodoDto: UpdateTodoDto,
  ): Promise<any> {
    const todo = await this.todoService.updateTodoById(id, updateTodoDto);

    const response = { message: 'updateTodoById', todo: todo };
    return response;
  }

  @Delete('/:id')
  @ApiResponse({
    status: 200,
    description: 'Successful response',
    type: DeleteTodoByIdResponse,
  })
  async deleteTodoById(@Param('id') id: string): Promise<any> {
    const todo = await this.todoService.deleteTodoById(id);

    const response = { message: 'deleteTodoById', todo: todo };
    return response;
  }
}
