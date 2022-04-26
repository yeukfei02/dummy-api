import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from '../prisma.service';
import { product } from '@prisma/client';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  async createProduct(createProductDto: CreateProductDto): Promise<product> {
    const product = await this.prisma.product.create({
      data: {
        title: createProductDto.title,
        description: createProductDto.description,
        price: createProductDto.price,
        discount_percentage: createProductDto.discount_percentage,
        rating: createProductDto.rating,
        stock: createProductDto.stock,
        brand: createProductDto.brand,
        category: createProductDto.category,
        thumbnail: createProductDto.thumbnail,
        images: createProductDto.images,
        cart_id: createProductDto.cart_id,
      },
      include: {
        cart: true,
      },
    });
    return product;
  }

  async getProducts(
    cartId: string,
    page: number,
    perPage: number,
  ): Promise<any> {
    let products = await this.prisma.product.findMany({
      skip: perPage * (page - 1),
      take: perPage,
      include: {
        cart: true,
      },
      orderBy: {
        created_at: 'desc',
      },
    });

    if (cartId) {
      products = await this.prisma.product.findMany({
        where: {
          cart_id: cartId,
        },
        skip: perPage * (page - 1),
        take: perPage,
        include: {
          cart: true,
        },
        orderBy: {
          created_at: 'desc',
        },
      });
    }

    return products;
  }

  async getProductById(id: string): Promise<any> {
    const products = await this.prisma.product.findUnique({
      where: {
        id: id,
      },
      include: {
        cart: true,
      },
    });
    return products;
  }

  async updateProductById(id: string, updateProductDto: UpdateProductDto) {
    const product = await this.prisma.product.update({
      where: {
        id: id,
      },
      data: {
        title: updateProductDto.title,
        description: updateProductDto.description,
        price: updateProductDto.price,
        discount_percentage: updateProductDto.discount_percentage,
        rating: updateProductDto.rating,
        stock: updateProductDto.stock,
        brand: updateProductDto.brand,
        category: updateProductDto.category,
        thumbnail: updateProductDto.thumbnail,
        images: updateProductDto.images,
        cart_id: updateProductDto.cart_id,
      },
      include: {
        cart: true,
      },
    });
    return product;
  }

  async deleteProductById(id: string): Promise<any> {
    const product = await this.prisma.product.delete({
      where: {
        id: id,
      },
      include: {
        cart: true,
      },
    });
    return product;
  }
}
