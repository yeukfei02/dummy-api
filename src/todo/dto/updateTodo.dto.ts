import { ApiProperty } from '@nestjs/swagger';

export class UpdateTodoDto {
  @ApiProperty()
  todo: string;

  @ApiProperty()
  users_id: string;
}
