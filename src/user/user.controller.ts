import {
  Controller,
  Post,
  Get,
  Put,
  Patch,
  Delete,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import {
  ApiBearerAuth,
  ApiHeader,
  ApiQuery,
  ApiResponse,
} from '@nestjs/swagger';
import { CreateUserResponse } from './response/create-user.response';
import { GetUsersResponse } from './response/get-users.response';
import { GetUserByIdResponse } from './response/get-user-by-id.response';
import { UpdateUserByIdResponse } from './response/update-user-by-id.response';
import { DeleteUserByIdResponse } from './response/delete-user-by-id.response';

@ApiBearerAuth()
@ApiHeader({
  name: 'Authorization',
  description: 'Jwt Token',
})
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'Successful response',
    type: CreateUserResponse,
  })
  async createUser(@Body() createUserDto: CreateUserDto): Promise<any> {
    const users = await this.userService.createUser(createUserDto);

    const response = { message: 'createUser', users: users };
    return response;
  }

  @Get()
  @ApiQuery({
    name: 'page',
    description: 'page',
    required: false,
    type: String,
  })
  @ApiQuery({
    name: 'per_page',
    description: 'per_page',
    required: false,
    type: String,
  })
  @ApiResponse({
    status: 200,
    description: 'Successful response',
    type: GetUsersResponse,
  })
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
  @ApiResponse({
    status: 200,
    description: 'Successful response',
    type: GetUserByIdResponse,
  })
  async getUserById(@Param('id') id: string): Promise<any> {
    const user = await this.userService.getUserById(id);

    const response = { message: 'getUserById', user: user };
    return response;
  }

  @Put('/:id')
  @ApiResponse({
    status: 200,
    description: 'Successful response',
    type: UpdateUserByIdResponse,
  })
  async updateUserById(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<any> {
    const user = await this.userService.updateUserById(id, updateUserDto);

    const response = { message: 'updateUserById', user: user };
    return response;
  }

  @Patch('/:id')
  @ApiResponse({
    status: 200,
    description: 'Successful response',
    type: UpdateUserByIdResponse,
  })
  async patchUserById(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<any> {
    const user = await this.userService.updateUserById(id, updateUserDto);

    const response = { message: 'updateUserById', user: user };
    return response;
  }

  @Delete('/:id')
  @ApiResponse({
    status: 200,
    description: 'Successful response',
    type: DeleteUserByIdResponse,
  })
  async deleteUserById(@Param('id') id: string): Promise<any> {
    const user = await this.userService.deleteUserById(id);

    const response = { message: 'deleteUserById', user: user };
    return response;
  }
}
