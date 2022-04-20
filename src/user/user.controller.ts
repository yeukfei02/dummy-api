import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUser.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<any> {
    const users = await this.userService.createUser(createUserDto);

    const response = { message: 'createUser', users: users };
    return response;
  }

  @Get()
  async getUsers(): Promise<any> {
    const users = await this.userService.getUsers();

    const response = { message: 'getUsers', users: users };
    return response;
  }

  @Get('/:id')
  async getUserById(@Param('id') id: string): Promise<any> {
    const user = await this.userService.getUserById(id);

    const response = { message: 'getUserById', user: user };
    return response;
  }
}
