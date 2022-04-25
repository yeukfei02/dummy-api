import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma.service';
import { users } from '@prisma/client';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import bcrypt from 'bcryptjs';

dayjs.extend(utc);
dayjs.extend(timezone);

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(createUserDto: CreateUserDto): Promise<users> {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(createUserDto.password, salt);

    const users = await this.prisma.users.create({
      data: {
        title: createUserDto.title,
        first_name: createUserDto.first_name,
        last_name: createUserDto.last_name,
        gender: createUserDto.gender,
        email: createUserDto.email,
        password: hashedPassword,
        date_of_birth: dayjs(createUserDto.date_of_birth)
          .tz('Asia/Hong_Kong')
          .toISOString(),
        register_date: dayjs(createUserDto.register_date)
          .tz('Asia/Hong_Kong')
          .toISOString(),
        phone: createUserDto.phone,
        picture: createUserDto.picture,
      },
      include: {
        locations: true,
        posts: true,
        comments: true,
        todos: true,
      },
    });
    return users;
  }

  async getUsers(page: number, perPage: number): Promise<any> {
    const users = await this.prisma.users.findMany({
      select: {
        id: true,
        title: true,
        first_name: true,
        last_name: true,
        picture: true,
      },
      skip: perPage * (page - 1),
      take: perPage,
    });
    return users;
  }

  async getUserById(id: string): Promise<any> {
    const users = await this.prisma.users.findUnique({
      where: {
        id: id,
      },
      include: {
        locations: true,
        posts: true,
        comments: true,
        todos: true,
      },
    });
    return users;
  }

  async updateUserById(id: string, updateUserDto: UpdateUserDto) {
    const users = await this.prisma.users.update({
      where: {
        id: id,
      },
      data: {
        title: updateUserDto.title,
        first_name: updateUserDto.first_name,
        last_name: updateUserDto.last_name,
        gender: updateUserDto.gender,
        email: updateUserDto.email,
        date_of_birth: dayjs(updateUserDto.date_of_birth)
          .tz('Asia/Hong_Kong')
          .toISOString(),
        register_date: dayjs(updateUserDto.register_date)
          .tz('Asia/Hong_Kong')
          .toISOString(),
        phone: updateUserDto.phone,
        picture: updateUserDto.picture,
      },
      include: {
        locations: true,
        posts: true,
        comments: true,
        todos: true,
      },
    });
    return users;
  }

  async deleteUserById(id: string): Promise<any> {
    const users = await this.prisma.users.delete({
      where: {
        id: id,
      },
      include: {
        locations: true,
        posts: true,
        comments: true,
        todos: true,
      },
    });
    return users;
  }
}
