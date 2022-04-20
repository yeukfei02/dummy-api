import { ApiProperty } from '@nestjs/swagger';

export class GetUserByIdResponse {
  @ApiProperty()
  message: string;

  @ApiProperty()
  user: { [key: string]: string };
}
