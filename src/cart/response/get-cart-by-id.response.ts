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

  @ApiProperty({ default: [], isArray: true })
  products: any[];
}

export class GetCartByIdResponse {
  @ApiProperty()
  message: string;

  @ApiProperty()
  cart: Cart;
}
