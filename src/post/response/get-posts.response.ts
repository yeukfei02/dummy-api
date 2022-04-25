import { ApiProperty } from '@nestjs/swagger';

export class GetPostsResponse {
  @ApiProperty()
  message: string;

  @ApiProperty({ default: [], isArray: true })
  data: Data[];

  @ApiProperty()
  total: number;

  @ApiProperty()
  page: number;

  @ApiProperty()
  limit: number;
}

export class Data {
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
  tags: Tag[];

  @ApiProperty({ default: [], isArray: true })
  comments: Comment[];
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
}
