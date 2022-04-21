import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { PrismaService } from '../prisma.service';
import { users } from '@prisma/client';
import bcrypt from 'bcryptjs';

@Injectable()
export class LoginService {
  constructor(private readonly prisma: PrismaService) {}

  async login(loginDto: LoginDto): Promise<users> {
    let result = null;

    const users = await this.prisma.users.findFirst({
      where: {
        email: loginDto.email,
      },
    });
    if (users) {
      const isValidPassword = bcrypt.compareSync(
        loginDto.password,
        users.password,
      );
      console.log('isValidPassword = ', isValidPassword);
      if (isValidPassword) {
        result = users;
      }
    }

    return result;
  }
}
