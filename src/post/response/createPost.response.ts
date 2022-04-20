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

  @ApiProperty()
  owners: { [key: string]: string };

  @ApiProperty({ default: [], isArray: true })
  tags: any[];

  @ApiProperty({ default: [], isArray: true })
  comments: any[];
}

export class CreatePostResponse {
  @ApiProperty()
  message: string;

  @ApiProperty()
  post: Post;
}
