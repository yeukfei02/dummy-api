import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';

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

  @Put('/:id')
  async updateUserById(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<any> {
    const user = await this.userService.updateUserById(id, updateUserDto);

    const response = { message: 'updateUserById', user: user };
    return response;
  }

  @Delete('/:id')
  async deleteUserById(@Param('id') id: string): Promise<any> {
    const user = await this.userService.deleteUserById(id);

    const response = { message: 'deleteUserById', user: user };
    return response;
  }
}
