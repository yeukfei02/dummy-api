import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getMain(): any {
    const response = { message: 'dummy-api' };
    return response;
  }
}
