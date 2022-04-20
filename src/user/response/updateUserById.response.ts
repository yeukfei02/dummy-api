import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserByIdResponse {
  @ApiProperty()
  message: string;

  @ApiProperty()
  user: { [key: string]: string };
}
