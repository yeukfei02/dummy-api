import { ApiProperty } from '@nestjs/swagger';

export class CreateUserResponse {
  @ApiProperty()
  message: string;

  @ApiProperty()
  users: { [key: string]: string };
}
