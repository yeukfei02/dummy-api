import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
  Query,
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
  async getUsers(
    @Query('page') page: string,
    @Query('per_page') perPage: string,
  ): Promise<any> {
    const pageInt = page ? parseInt(page, 10) : 1;
    const perPageInt = page ? parseInt(perPage, 10) : 20;

    const users = await this.userService.getUsers(pageInt, perPageInt);

    const response = {
      message: 'getUsers',
      data: users,
      total: users.length,
      page: pageInt,
      limit: perPageInt,
    };
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
