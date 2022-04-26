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
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

import {
  ApiBearerAuth,
  ApiHeader,
  ApiQuery,
  ApiResponse,
} from '@nestjs/swagger';
import { CreateProductResponse } from './response/create-product.response';
import { GetProductsResponse } from './response/get-products.response';
import { GetProductByIdResponse } from './response/get-product-by-id.response';
import { UpdateProductByIdResponse } from './response/update-product-by-id.response';
import { DeleteProductByIdResponse } from './response/delete-product-by-id.response';

@ApiBearerAuth()
@ApiHeader({
  name: 'Authorization',
  description: 'Jwt Token',
})
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'Successful response',
    type: CreateProductResponse,
  })
  async createProduct(
    @Body() createProductDto: CreateProductDto,
  ): Promise<any> {
    const product = await this.productService.createProduct(createProductDto);

    const response = { message: 'createProduct', product: product };
    return response;
  }

  @Get()
  @ApiQuery({
    name: 'cart_id',
    description: 'cart_id',
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
    type: GetProductsResponse,
  })
  async getProducts(
    @Query('cart_id') cart_id: string,
    @Query('page') page: string,
    @Query('per_page') perPage: string,
  ): Promise<any> {
    const cartId = cart_id;
    const pageInt = page ? parseInt(page, 10) : 1;
    const perPageInt = page ? parseInt(perPage, 10) : 20;

    const products = await this.productService.getProducts(
      cartId,
      pageInt,
      perPageInt,
    );

    const response = {
      message: 'getProducts',
      data: products,
      total: products.length,
      page: pageInt,
      limit: perPageInt,
    };
    return response;
  }

  @Get('/:id')
  @ApiResponse({
    status: 200,
    description: 'Successful response',
    type: GetProductByIdResponse,
  })
  async getProductById(@Param('id') id: string): Promise<any> {
    const product = await this.productService.getProductById(id);

    const response = { message: 'getProductById', product: product };
    return response;
  }

  @Put('/:id')
  @ApiResponse({
    status: 200,
    description: 'Successful response',
    type: UpdateProductByIdResponse,
  })
  async updateProductById(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<any> {
    const product = await this.productService.updateProductById(
      id,
      updateProductDto,
    );

    const response = { message: 'updateProductById', product: product };
    return response;
  }

  @Patch('/:id')
  @ApiResponse({
    status: 200,
    description: 'Successful response',
    type: UpdateProductByIdResponse,
  })
  async patchProductById(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<any> {
    const product = await this.productService.updateProductById(
      id,
      updateProductDto,
    );

    const response = { message: 'updateProductById', product: product };
    return response;
  }

  @Delete('/:id')
  @ApiResponse({
    status: 200,
    description: 'Successful response',
    type: DeleteProductByIdResponse,
  })
  async deleteProductById(@Param('id') id: string): Promise<any> {
    const product = await this.productService.deleteProductById(id);

    const response = { message: 'deleteProductById', product: product };
    return response;
  }
}
