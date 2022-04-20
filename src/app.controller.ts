import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

import { ApiResponse } from '@nestjs/swagger';
import { GetMainResponse } from './response/getMain.response';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Successful response',
    type: GetMainResponse,
  })
  getMain(): any {
    const response = this.appService.getMain();
    return response;
  }
}
