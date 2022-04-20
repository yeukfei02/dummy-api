import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { PrismaService } from '../prisma.service';
import { users } from '@prisma/client';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(createUserDto: CreateUserDto): Promise<users> {
    const users = await this.prisma.users.create({
      data: {
        title: createUserDto.title,
        first_name: createUserDto.first_name,
        last_name: createUserDto.last_name,
        gender: createUserDto.gender,
        email: createUserDto.email,
        date_of_birth: dayjs(createUserDto.date_of_birth)
          .tz('Asia/Hong_Kong')
          .toISOString(),
        register_date: dayjs(createUserDto.register_date)
          .tz('Asia/Hong_Kong')
          .toISOString(),
        phone: createUserDto.phone,
        picture: createUserDto.picture,
      },
    });
    return users;
  }

  async getUsers(): Promise<any> {
    const users = await this.prisma.users.findMany({
      select: {
        id: true,
        title: true,
        first_name: true,
        last_name: true,
        picture: true,
      },
    });
    return users;
  }

  async getUserById(id: string): Promise<any> {
    const users = await this.prisma.users.findUnique({
      where: {
        id: id,
      },
    });
    return users;
  }
}
