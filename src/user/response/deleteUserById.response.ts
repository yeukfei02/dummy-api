import { ApiProperty } from '@nestjs/swagger';

export class DeleteUserByIdResponse {
  @ApiProperty()
  message: string;

  @ApiProperty()
  user: { [key: string]: string };
}
