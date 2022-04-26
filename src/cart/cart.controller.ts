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
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';

import {
  ApiBearerAuth,
  ApiHeader,
  ApiQuery,
  ApiResponse,
} from '@nestjs/swagger';
import { CreateCartResponse } from './response/create-cart.response';
import { GetCartsResponse } from './response/get-carts.response';
import { GetCartByIdResponse } from './response/get-cart-by-id.response';
import { UpdateCartByIdResponse } from './response/update-cart-by-id.response';
import { DeleteCartByIdResponse } from './response/delete-cart-by-id.response';

@ApiBearerAuth()
@ApiHeader({
  name: 'Authorization',
  description: 'Jwt Token',
})
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'Successful response',
    type: CreateCartResponse,
  })
  async createCart(@Body() createCartDto: CreateCartDto): Promise<any> {
    const cart = await this.cartService.createCart(createCartDto);

    const response = { message: 'createCart', cart: cart };
    return response;
  }

  @Get()
  @ApiQuery({
    name: 'users_id',
    description: 'users_id',
    required: false,
    type: String,
  })
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
    type: GetCartsResponse,
  })
  async getCarts(
    @Query('users_id') users_id: string,
    @Query('page') page: string,
    @Query('per_page') perPage: string,
  ): Promise<any> {
    const usersId = users_id;
    const pageInt = page ? parseInt(page, 10) : 1;
    const perPageInt = page ? parseInt(perPage, 10) : 20;

    const carts = await this.cartService.getCarts(usersId, pageInt, perPageInt);

    const response = {
      message: 'getCarts',
      data: carts,
      total: carts.length,
      page: pageInt,
      limit: perPageInt,
    };
    return response;
  }

  @Get('/:id')
  @ApiResponse({
    status: 200,
    description: 'Successful response',
    type: GetCartByIdResponse,
  })
  async getCartById(@Param('id') id: string): Promise<any> {
    const cart = await this.cartService.getCartById(id);

    const response = { message: 'getCartById', cart: cart };
    return response;
  }

  @Put('/:id')
  @ApiResponse({
    status: 200,
    description: 'Successful response',
    type: UpdateCartByIdResponse,
  })
  async updateCartById(
    @Param('id') id: string,
    @Body() updateCartDto: UpdateCartDto,
  ): Promise<any> {
    const cart = await this.cartService.updateCartById(id, updateCartDto);

    const response = { message: 'updateCartById', cart: cart };
    return response;
  }

  @Patch('/:id')
  @ApiResponse({
    status: 200,
    description: 'Successful response',
    type: UpdateCartByIdResponse,
  })
  async patchCartById(
    @Param('id') id: string,
    @Body() updateCartDto: UpdateCartDto,
  ): Promise<any> {
    const cart = await this.cartService.updateCartById(id, updateCartDto);

    const response = { message: 'updateCartById', cart: cart };
    return response;
  }

  @Delete('/:id')
  @ApiResponse({
    status: 200,
    description: 'Successful response',
    type: DeleteCartByIdResponse,
  })
  async deleteCartById(@Param('id') id: string): Promise<any> {
    const cart = await this.cartService.deleteCartById(id);

    const response = { message: 'deleteCartById', cart: cart };
    return response;
  }
}
