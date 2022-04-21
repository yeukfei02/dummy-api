import { Controller, Post, Body } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginDto } from './dto/login.dto';

import { ApiResponse } from '@nestjs/swagger';
import { LoginResponse } from './response/login.response';
import jwt from 'jsonwebtoken';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'Successful response',
    type: LoginResponse,
  })
  async login(@Body() loginDto: LoginDto): Promise<any> {
    let response = {};

    const users = await this.loginService.login(loginDto);
    if (users) {
      const token = jwt.sign(
        { id: users.id, email: users.email },
        process.env.JWT_SECRET,
        { expiresIn: '1d' },
      );

      response = {
        message: 'login',
        users: {
          id: users.id,
          first_name: users.first_name,
          last_name: users.last_name,
          gender: users.gender,
          email: users.email,
          created_at: users.created_at,
          updated_at: users.updated_at,
        },
        token: token,
      };
    }

    return response;
  }
}
