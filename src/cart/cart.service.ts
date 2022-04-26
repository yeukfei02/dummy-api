import { Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { PrismaService } from '../prisma.service';
import { cart } from '@prisma/client';

@Injectable()
export class CartService {
  constructor(private readonly prisma: PrismaService) {}

  async createCart(createCartDto: CreateCartDto): Promise<cart> {
    const cart = await this.prisma.cart.create({
      data: {
        users_id: createCartDto.users_id,
      },
      include: {
        products: true,
      },
    });
    return cart;
  }

  async getCarts(usersId: string, page: number, perPage: number): Promise<any> {
    let carts = await this.prisma.cart.findMany({
      skip: perPage * (page - 1),
      take: perPage,
      include: {
        products: true,
      },
      orderBy: {
        created_at: 'desc',
      },
    });

    if (usersId) {
      carts = await this.prisma.cart.findMany({
        where: {
          users_id: usersId,
        },
        skip: perPage * (page - 1),
        take: perPage,
        include: {
          products: true,
        },
        orderBy: {
          created_at: 'desc',
        },
      });
    }

    return carts;
  }

  async getCartById(id: string): Promise<any> {
    const carts = await this.prisma.cart.findUnique({
      where: {
        id: id,
      },
      include: {
        products: true,
      },
    });
    return carts;
  }

  async updateCartById(id: string, updateCartDto: UpdateCartDto) {
    const cart = await this.prisma.cart.update({
      where: {
        id: id,
      },
      data: {
        users_id: updateCartDto.users_id,
      },
      include: {
        products: true,
      },
    });
    return cart;
  }

  async deleteCartById(id: string): Promise<any> {
    const cart = await this.prisma.cart.delete({
      where: {
        id: id,
      },
      include: {
        products: true,
      },
    });
    return cart;
  }
}
