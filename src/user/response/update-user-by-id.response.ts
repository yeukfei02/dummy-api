import { ApiProperty } from '@nestjs/swagger';

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

export class Location {
  @ApiProperty()
  id: string;

  @ApiProperty()
  street: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  state: string;

  @ApiProperty()
  country: string;

  @ApiProperty()
  timezone: string;

  @ApiProperty()
  users_id: string;

  @ApiProperty()
  created_at: string;

  @ApiProperty()
  updated_at: string;
}

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

export class User {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  first_name: string;

  @ApiProperty()
  last_name: string;

  @ApiProperty()
  gender: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  date_of_birth: string;

  @ApiProperty()
  register_date: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  picture: string;

  @ApiProperty()
  created_at: string;

  @ApiProperty()
  updated_at: string;

  @ApiProperty()
  password: string;

  @ApiProperty({ default: [], isArray: true })
  locations: Location[];

  @ApiProperty({ default: [], isArray: true })
  posts: Post[];

  @ApiProperty({ default: [], isArray: true })
  comments: Comment[];

  @ApiProperty({ default: [], isArray: true })
  todos: any[];

  @ApiProperty()
  cart: any;
}
export class UpdateUserByIdResponse {
  @ApiProperty()
  message: string;

  @ApiProperty()
  user: User;
}
