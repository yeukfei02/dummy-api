import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaService } from '../prisma.service';
import { faker } from '@faker-js/faker';
import { Gender, Title } from '@prisma/client';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const prismaService = new PrismaService();
    const service = new UserService(prismaService);
    controller = new UserController(service);
  });

  it('controller should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('createUsers', () => {
    let users: any = {};

    beforeEach(async () => {
      const createUserDto = {
        title: Title.mr,
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        gender: Gender.male,
        email: faker.internet.email(),
        password: faker.internet.password(),
        date_of_birth: dayjs(faker.date.past())
          .tz('Asia/Hong_Kong')
          .toISOString(),
        register_date: dayjs(faker.date.recent())
          .tz('Asia/Hong_Kong')
          .toISOString(),
        phone: faker.phone.phoneNumber(),
        picture: faker.image.imageUrl(),
      };
      users = await controller.createUser(createUserDto);
    });

    it('return success', async () => {
      console.log('users = ', users);
      expect(users).toBeDefined();
      expect(users.message).toBeDefined();
      expect(users.users).toBeDefined();
    });
  });

  describe('getUsers', () => {
    let users: any = {};

    beforeEach(async () => {
      users = await controller.getUsers('1', '20');
    });

    it('return success', async () => {
      console.log('users = ', users);
      expect(users).toBeDefined();
      expect(users.message).toBeDefined();
      expect(users.data).toBeDefined();
    });
  });

  describe('getUserById', () => {
    let users: any = {};

    beforeEach(async () => {
      const usersList = await controller.getUsers('1', '20');
      if (usersList) {
        const id = usersList.data[0].id;

        const updateUserDto = {
          title: Title.mr,
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          gender: Gender.male,
          email: faker.internet.email(),
          password: faker.internet.password(),
          date_of_birth: dayjs(faker.date.past())
            .tz('Asia/Hong_Kong')
            .toISOString(),
          register_date: dayjs(faker.date.recent())
            .tz('Asia/Hong_Kong')
            .toISOString(),
          phone: faker.phone.phoneNumber(),
          picture: faker.image.imageUrl(),
        };
        users = await controller.updateUserById(id, updateUserDto);
      }
    });

    it('return success', async () => {
      console.log('users = ', users);
      expect(users).toBeDefined();
      expect(users.message).toBeDefined();
      expect(users.user).toBeDefined();
    });
  });

  describe('updateUserById', () => {
    let users: any = {};

    beforeEach(async () => {
      const usersList = await controller.getUsers('1', '20');
      if (usersList) {
        const id = usersList.data[0].id;
        users = await controller.getUserById(id);
      }
    });

    it('return success', async () => {
      console.log('users = ', users);
      expect(users).toBeDefined();
      expect(users.message).toBeDefined();
      expect(users.user).toBeDefined();
    });
  });

  describe('deleteUserById', () => {
    let users: any = {};

    beforeEach(async () => {
      const usersList = await controller.getUsers('1', '20');
      if (usersList) {
        const id = usersList.data[0].id;
        users = await controller.deleteUserById(id);
      }
    });

    it('return success', async () => {
      console.log('users = ', users);
      expect(users).toBeDefined();
      expect(users.message).toBeDefined();
      expect(users.user).toBeDefined();
    });
  });
});
