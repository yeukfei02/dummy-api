import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/createTodo.dto';
import { UpdateTodoDto } from './dto/updateTodo.dto';
import { PrismaService } from '../prisma.service';
import { todo } from '@prisma/client';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

@Injectable()
export class TodoService {
  constructor(private readonly prisma: PrismaService) {}

  async createTodo(createTodoDto: CreateTodoDto): Promise<todo> {
    const todo = await this.prisma.todo.create({
      data: {
        todo: createTodoDto.todo,
        users_id: createTodoDto.users_id,
      },
      include: {
        users: true,
      },
    });
    return todo;
  }

  async getTodos(usersId: string, page: number, perPage: number): Promise<any> {
    let todos = await this.prisma.todo.findMany({
      skip: perPage * (page - 1),
      take: perPage,
    });

    if (usersId) {
      todos = await this.prisma.todo.findMany({
        where: {
          users_id: usersId,
        },
        skip: perPage * (page - 1),
        take: perPage,
      });
    }

    return todos;
  }

  async getTodoById(id: string): Promise<any> {
    const todo = await this.prisma.todo.findUnique({
      where: {
        id: id,
      },
      include: {
        users: true,
      },
    });
    return todo;
  }

  async updateTodoById(id: string, updateTodoDto: UpdateTodoDto) {
    const todo = await this.prisma.todo.update({
      where: {
        id: id,
      },
      data: {
        todo: updateTodoDto.todo,
        users_id: updateTodoDto.users_id,
      },
      include: {
        users: true,
      },
    });
    return todo;
  }

  async deleteTodoById(id: string): Promise<any> {
    const todo = await this.prisma.todo.delete({
      where: {
        id: id,
      },
      include: {
        users: true,
      },
    });
    return todo;
  }
}
