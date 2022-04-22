import { ApiProperty } from '@nestjs/swagger';

export class Quote {
  @ApiProperty()
  id: string;

  @ApiProperty()
  content: string;

  @ApiProperty()
  author: string;

  @ApiProperty()
  tags: string[];

  @ApiProperty()
  created_at: string;

  @ApiProperty()
  updated_at: string;
}

export class GetQuoteByIdResponse {
  @ApiProperty()
  message: string;

  @ApiProperty()
  quote: Quote;
}
