import { ApiProperty } from '@nestjs/swagger';

export class UpdateProductDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  discount_percentage: number;

  @ApiProperty()
  rating: number;

  @ApiProperty()
  stock: number;

  @ApiProperty()
  brand: string;

  @ApiProperty()
  category: string;

  @ApiProperty()
  thumbnail: string;

  @ApiProperty({ default: [], isArray: true })
  images: string[];

  @ApiProperty()
  cart_id: string;
}
