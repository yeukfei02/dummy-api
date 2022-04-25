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

export class CreateLocationResponse {
  @ApiProperty()
  message: string;

  @ApiProperty()
  location: Location;
}
