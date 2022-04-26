import { ApiProperty } from '@nestjs/swagger';

export class GetCartsResponse {
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

export class Data {
  @ApiProperty()
  id: string;

  @ApiProperty()
  created_at: string;

  @ApiProperty()
  updated_at: string;

  @ApiProperty()
  users_id: string;

  @ApiProperty({ default: [], isArray: true })
  products: Product[];
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
  created_at: string;
  updated_at: string;
  cart_id: string;
}
