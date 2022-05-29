import { UserService } from '../../src/user/user.service';
import { TodoService } from './todo.service';
import { PrismaService } from '../prisma.service';
import { faker } from '@faker-js/faker';

describe('TodoService', () => {
  let service: TodoService;
  let usersId = '';

  beforeEach(async () => {
    const prismaService = new PrismaService();
    service = new TodoService(prismaService);

    const userService = new UserService(prismaService);
    const users = await userService.getUsers(1, 20);
    usersId = users[0].id;
  });

  it('service should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createTodos', () => {
    let todos: any = {};

    beforeEach(async () => {
      const createTodoDto = {
        todo: faker.lorem.word(),
        users_id: usersId,
      };
      todos = await service.createTodo(createTodoDto);
    });

    it('return success', async () => {
      console.log('todos = ', todos);
      expect(todos).toBeDefined();
      expect(todos.id).toBeDefined();
      expect(todos.todo).toBeDefined();
      expect(todos.users_id).toBeDefined();
      expect(todos.created_at).toBeDefined();
      expect(todos.updated_at).toBeDefined();
    });
  });

  describe('getTodos', () => {
    let todos: any = {};

    beforeEach(async () => {
      todos = await service.getTodos(usersId, 1, 20);
    });

    it('return success', async () => {
      console.log('todos = ', todos);
      expect(todos).toBeDefined();

      for (let index = 0; index < todos.length; index++) {
        const item = todos[index];

        expect(item.id).toBeDefined();
        expect(item.todo).toBeDefined();
        expect(item.users_id).toBeDefined();
        expect(item.created_at).toBeDefined();
        expect(item.updated_at).toBeDefined();
      }
    });
  });

  describe('getTodoById', () => {
    let todos: any = {};

    beforeEach(async () => {
      const todosList = await service.getTodos(usersId, 1, 20);
      if (todosList) {
        const id = todosList[0].id;
        todos = await service.getTodoById(id);
      }
    });

    it('return success', async () => {
      console.log('todos = ', todos);
      expect(todos).toBeDefined();
      expect(todos.id).toBeDefined();
      expect(todos.todo).toBeDefined();
      expect(todos.users_id).toBeDefined();
      expect(todos.created_at).toBeDefined();
      expect(todos.updated_at).toBeDefined();
      expect(todos.created_at).toBeDefined();
      expect(todos.updated_at).toBeDefined();
    });
  });

  describe('updateTodoById', () => {
    let todos: any = {};

    beforeEach(async () => {
      const todosList = await service.getTodos(usersId, 1, 20);
      if (todosList) {
        const id = todosList[0].id;

        const updateTodoDto = {
          todo: faker.lorem.word(),
          users_id: usersId,
        };
        todos = await service.updateTodoById(id, updateTodoDto);
      }
    });

    it('return success', async () => {
      console.log('todos = ', todos);
      expect(todos).toBeDefined();
      expect(todos.id).toBeDefined();
      expect(todos.todo).toBeDefined();
      expect(todos.users_id).toBeDefined();
      expect(todos.created_at).toBeDefined();
      expect(todos.updated_at).toBeDefined();
      expect(todos.created_at).toBeDefined();
      expect(todos.updated_at).toBeDefined();
    });
  });

  describe('deleteTodoById', () => {
    let todos: any = {};

    beforeEach(async () => {
      const todosList = await service.getTodos(usersId, 1, 20);
      if (todosList) {
        const id = todosList[0].id;
        todos = await service.deleteTodoById(id);
      }
    });

    it('return success', async () => {
      console.log('todos = ', todos);
      expect(todos).toBeDefined();
      expect(todos.id).toBeDefined();
      expect(todos.todo).toBeDefined();
      expect(todos.users_id).toBeDefined();
      expect(todos.created_at).toBeDefined();
      expect(todos.updated_at).toBeDefined();
    });
  });
});
