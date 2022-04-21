import { ApiProperty } from '@nestjs/swagger';

export class Todo {
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

  @ApiProperty()
  users: { [key: string]: string };
}

export class UpdateTodoByIdResponse {
  @ApiProperty()
  message: string;

  @ApiProperty()
  todo: Todo;
}
