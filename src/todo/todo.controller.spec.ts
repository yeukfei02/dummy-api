import { UserController } from '../../src/user/user.controller';
import { UserService } from '../../src/user/user.service';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { PrismaService } from '../prisma.service';
import { faker } from '@faker-js/faker';

describe('TodoController', () => {
  let controller: TodoController;
  let usersId = '';

  beforeEach(async () => {
    const prismaService = new PrismaService();
    const todoService = new TodoService(prismaService);
    controller = new TodoController(todoService);

    const userService = new UserService(prismaService);
    const userController = new UserController(userService);

    const users = await userController.getUsers('1', '20');
    usersId = users && users.data ? users.data[0].id : '';
  });

  it('controller should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('createTodos', () => {
    let todos: any = {};

    beforeEach(async () => {
      const createTodoDto = {
        todo: faker.lorem.word(),
        users_id: usersId,
      };
      todos = await controller.createTodo(createTodoDto);
    });

    it('return success', async () => {
      console.log('todos = ', todos);
      expect(todos).toBeDefined();
      expect(todos.message).toBeDefined();
      expect(todos.todo).toBeDefined();
    });
  });

  describe('getTodos', () => {
    let todos: any = {};

    beforeEach(async () => {
      todos = await controller.getTodos(usersId, '1', '20');
    });

    it('return success', async () => {
      console.log('todos = ', todos);
      expect(todos).toBeDefined();
      expect(todos.message).toBeDefined();
      expect(todos.data).toBeDefined();
    });
  });

  describe('getTodoById', () => {
    let todos: any = {};

    beforeEach(async () => {
      const todosList = await controller.getTodos(usersId, '1', '20');
      if (todosList) {
        const id = todosList.data[0].id;

        const updateTodoDto = {
          todo: faker.lorem.word(),
          users_id: usersId,
        };
        todos = await controller.updateTodoById(id, updateTodoDto);
      }
    });

    it('return success', async () => {
      console.log('todos = ', todos);
      expect(todos).toBeDefined();
      expect(todos.message).toBeDefined();
      expect(todos.todo).toBeDefined();
    });
  });

  describe('updateTodoById', () => {
    let todos: any = {};

    beforeEach(async () => {
      const todosList = await controller.getTodos(usersId, '1', '20');
      if (todosList) {
        const id = todosList.data[0].id;
        todos = await controller.getTodoById(id);
      }
    });

    it('return success', async () => {
      console.log('todos = ', todos);
      expect(todos).toBeDefined();
      expect(todos.message).toBeDefined();
      expect(todos.todo).toBeDefined();
    });
  });

  describe('deleteTodoById', () => {
    let todos: any = {};

    beforeEach(async () => {
      const todosList = await controller.getTodos(usersId, '1', '20');
      if (todosList) {
        const id = todosList.data[0].id;
        todos = await controller.deleteTodoById(id);
      }
    });

    it('return success', async () => {
      console.log('todos = ', todos);
      expect(todos).toBeDefined();
      expect(todos.message).toBeDefined();
      expect(todos.todo).toBeDefined();
    });
  });
});
