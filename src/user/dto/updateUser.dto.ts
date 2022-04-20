import { Title, Gender } from '@prisma/client';

export class UpdateUserDto {
  title: Title;
  first_name: string;
  last_name: string;
  gender: Gender;
  email: string;
  date_of_birth: string;
  register_date: string;
  phone: string;
  picture: string;
}
