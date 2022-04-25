import { Controller, Post, Body } from '@nestjs/common';
import { SignupService } from './signup.service';
import { SignupDto } from './dto/signup.dto';

import { ApiResponse } from '@nestjs/swagger';
import { SignupResponse } from './response/signup.response';

@Controller('signup')
export class SignupController {
  constructor(private readonly signupService: SignupService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'Successful response',
    type: SignupResponse,
  })
  async signup(@Body() signupDto: SignupDto): Promise<any> {
    let response = {
      message: 'Signup',
      users: {},
    };

    const users = await this.signupService.signup(signupDto);
    if (users) {
      response = {
        message: 'Signup',
        users: users,
      };
    }

    return response;
  }
}
