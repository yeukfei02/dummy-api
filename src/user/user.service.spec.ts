import { UserService } from './user.service';
import { PrismaService } from '../prisma.service';
import { faker } from '@faker-js/faker';
import { Gender, Title } from '@prisma/client';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const prismaService = new PrismaService();
    service = new UserService(prismaService);
  });

  it('service should be defined', () => {
    expect(service).toBeDefined();
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
      users = await service.createUser(createUserDto);
    });

    it('return success', async () => {
      console.log('users = ', users);
      expect(users).toBeDefined();
      expect(users.id).toBeDefined();
      expect(users.title).toBeDefined();
      expect(users.first_name).toBeDefined();
      expect(users.last_name).toBeDefined();
      expect(users.gender).toBeDefined();
      expect(users.email).toBeDefined();
      expect(users.date_of_birth).toBeDefined();
      expect(users.register_date).toBeDefined();
      expect(users.phone).toBeDefined();
      expect(users.picture).toBeDefined();
      expect(users.created_at).toBeDefined();
      expect(users.updated_at).toBeDefined();
    });
  });

  describe('getUsers', () => {
    let users: any = {};

    beforeEach(async () => {
      users = await service.getUsers(1, 20);
    });

    it('return success', async () => {
      console.log('users = ', users);
      expect(users).toBeDefined();

      for (let index = 0; index < users.length; index++) {
        const item = users[index];

        expect(item.id).toBeDefined();
        expect(item.title).toBeDefined();
        expect(item.first_name).toBeDefined();
        expect(item.last_name).toBeDefined();
        expect(item.picture).toBeDefined();
      }
    });
  });

  describe('getUserById', () => {
    let users: any = {};

    beforeEach(async () => {
      const usersList = await service.getUsers(1, 20);
      if (usersList) {
        const id = usersList[0].id;
        users = await service.getUserById(id);
      }
    });

    it('return success', async () => {
      console.log('users = ', users);
      expect(users).toBeDefined();
      expect(users.id).toBeDefined();
      expect(users.title).toBeDefined();
      expect(users.first_name).toBeDefined();
      expect(users.last_name).toBeDefined();
      expect(users.gender).toBeDefined();
      expect(users.email).toBeDefined();
      expect(users.date_of_birth).toBeDefined();
      expect(users.register_date).toBeDefined();
      expect(users.phone).toBeDefined();
      expect(users.picture).toBeDefined();
      expect(users.created_at).toBeDefined();
      expect(users.updated_at).toBeDefined();
    });
  });

  describe('updateUserById', () => {
    let users: any = {};

    beforeEach(async () => {
      const usersList = await service.getUsers(1, 20);
      if (usersList) {
        const id = usersList[0].id;

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
        users = await service.updateUserById(id, updateUserDto);
      }
    });

    it('return success', async () => {
      console.log('users = ', users);
      expect(users).toBeDefined();
      expect(users.id).toBeDefined();
      expect(users.title).toBeDefined();
      expect(users.first_name).toBeDefined();
      expect(users.last_name).toBeDefined();
      expect(users.gender).toBeDefined();
      expect(users.email).toBeDefined();
      expect(users.date_of_birth).toBeDefined();
      expect(users.register_date).toBeDefined();
      expect(users.phone).toBeDefined();
      expect(users.picture).toBeDefined();
      expect(users.created_at).toBeDefined();
      expect(users.updated_at).toBeDefined();
    });
  });

  describe('deleteUserById', () => {
    let users: any = {};

    beforeEach(async () => {
      const usersList = await service.getUsers(1, 20);
      if (usersList) {
        const id = usersList[0].id;
        users = await service.deleteUserById(id);
      }
    });

    it('return success', async () => {
      console.log('users = ', users);
      expect(users).toBeDefined();
      expect(users.id).toBeDefined();
      expect(users.title).toBeDefined();
      expect(users.first_name).toBeDefined();
      expect(users.last_name).toBeDefined();
      expect(users.gender).toBeDefined();
      expect(users.email).toBeDefined();
      expect(users.date_of_birth).toBeDefined();
      expect(users.register_date).toBeDefined();
      expect(users.phone).toBeDefined();
      expect(users.picture).toBeDefined();
      expect(users.created_at).toBeDefined();
      expect(users.updated_at).toBeDefined();
    });
  });
});
