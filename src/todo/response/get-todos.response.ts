import { ApiProperty } from '@nestjs/swagger';

export class Data {
  @ApiProperty()
  id: string;

  @ApiProperty()
  todo: string;

  @ApiProperty()
  created_at: string;

  @ApiProperty()
  updated_at: string;

  @ApiProperty()
  users_id: string;
}

export class GetTodosResponse {
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
