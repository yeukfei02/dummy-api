import { Title, Gender } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  title: Title;

  @ApiProperty()
  first_name: string;

  @ApiProperty()
  last_name: string;

  @ApiProperty()
  gender: Gender;

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
}
