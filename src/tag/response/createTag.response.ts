import { ApiProperty } from '@nestjs/swagger';

export class Post {
  @ApiProperty()
  id: string;

  @ApiProperty()
  text: string;

  @ApiProperty()
  image: string;

  @ApiProperty()
  likes: number;

  @ApiProperty()
  publish_date: string;

  @ApiProperty()
  users_id: string;

  @ApiProperty()
  created_at: string;

  @ApiProperty()
  updated_at: string;
}

export class Tag {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  post_id: string;

  @ApiProperty()
  created_at: string;

  @ApiProperty()
  updated_at: string;

  @ApiProperty()
  post: Post;
}

export class CreateTagResponse {
  @ApiProperty()
  message: string;

  @ApiProperty()
  tag: Tag;
}
