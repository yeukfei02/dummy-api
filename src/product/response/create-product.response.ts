import { ApiProperty } from '@nestjs/swagger';

export class Cart {
  @ApiProperty()
  id: string;

  @ApiProperty()
  created_at: string;

  @ApiProperty()
  updated_at: string;

  @ApiProperty()
  users_id: string;
}

export class Product {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  discount_percentage: string;

  @ApiProperty()
  rating: string;

  @ApiProperty()
  stock: string;

  @ApiProperty()
  brand: string;

  @ApiProperty()
  category: string;

  @ApiProperty()
  thumbnail: string;

  @ApiProperty({ default: [], isArray: true })
  images: string[];

  @ApiProperty()
  created_at: string;

  @ApiProperty()
  updated_at: string;

  @ApiProperty()
  cart_id: string;

  @ApiProperty()
  cart: Cart;
}

export class CreateProductResponse {
  @ApiProperty()
  message: string;

  @ApiProperty()
  product: Product;
}
