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

export class Comment {
  @ApiProperty()
  id: string;

  @ApiProperty()
  message: string;

  @ApiProperty()
  publish_date: string;

  @ApiProperty()
  post_id: string;

  @ApiProperty()
  created_at: string;

  @ApiProperty()
  updated_at: string;

  @ApiProperty()
  users_id: string;

  @ApiProperty()
  owners: { [key: string]: string };

  @ApiProperty()
  post: Post;
}

export class CreateCommentResponse {
  @ApiProperty()
  message: string;

  @ApiProperty()
  comment: Comment;
}
