import { ApiProperty } from '@nestjs/swagger';

export class GetQuotesResponse {
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
  content: string;

  @ApiProperty()
  author: string;

  @ApiProperty()
  tags: Tag[];

  @ApiProperty()
  created_at: string;

  @ApiProperty()
  updated_at: string;
}

export class Tag {}
