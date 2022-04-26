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

export class Data {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: null | string;

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

  @ApiProperty()
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

export class GetProductsResponse {
  @ApiProperty()
  message: string;

  @ApiProperty({ default: [], isArray: true })
  data: Data[];

  @ApiProperty()
  total: number;

  @ApiProperty()
  page: number;

  @ApiProperty()
  limit: number;
}
