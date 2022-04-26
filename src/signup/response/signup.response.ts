import { ApiProperty } from '@nestjs/swagger';

export class Users {
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
  locations: any[];

  @ApiProperty({ default: [], isArray: true })
  posts: any[];

  @ApiProperty({ default: [], isArray: true })
  comments: any[];

  @ApiProperty({ default: [], isArray: true })
  todos: any[];

  @ApiProperty()
  cart: any;
}

export class SignupResponse {
  @ApiProperty()
  message: string;

  @ApiProperty()
  users: Users;
}
