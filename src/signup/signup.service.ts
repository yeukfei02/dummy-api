import { Injectable } from '@nestjs/common';
import { SignupDto } from './dto/signup.dto';
import { PrismaService } from '../prisma.service';
import { users } from '@prisma/client';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import bcrypt from 'bcryptjs';

dayjs.extend(utc);
dayjs.extend(timezone);

@Injectable()
export class SignupService {
  constructor(private readonly prisma: PrismaService) {}

  async signup(signupDto: SignupDto): Promise<users> {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(signupDto.password, salt);

    const users = await this.prisma.users.create({
      data: {
        title: signupDto.title,
        first_name: signupDto.first_name,
        last_name: signupDto.last_name,
        gender: signupDto.gender,
        email: signupDto.email,
        password: hashedPassword,
        date_of_birth: dayjs(signupDto.date_of_birth)
          .tz('Asia/Hong_Kong')
          .toISOString(),
        register_date: dayjs(signupDto.register_date)
          .tz('Asia/Hong_Kong')
          .toISOString(),
        phone: signupDto.phone,
        picture: signupDto.picture,
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
