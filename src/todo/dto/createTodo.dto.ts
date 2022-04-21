import { ApiProperty } from '@nestjs/swagger';

export class CreateTodoDto {
  @ApiProperty()
  todo: string;

  @ApiProperty()
  users_id: string;
}
