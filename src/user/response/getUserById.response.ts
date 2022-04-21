import { ApiProperty } from '@nestjs/swagger';

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

  @ApiProperty({ default: [], isArray: true })
  locations: Location[];
}

export class GetUserByIdResponse {
  @ApiProperty()
  message: string;

  @ApiProperty()
  user: User;
}
