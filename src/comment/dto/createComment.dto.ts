import { ApiProperty } from '@nestjs/swagger';

export class CreateCommentDto {
  @ApiProperty()
  message: string;

  @ApiProperty()
  publish_date: string;

  @ApiProperty()
  users_id: string;

  @ApiProperty()
  post_id: string;
}
