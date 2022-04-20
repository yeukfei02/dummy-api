import { ApiProperty } from '@nestjs/swagger';

export class GetMainResponse {
  @ApiProperty()
  message: string;
}
