import { Controller, Post, Get, Body, Query } from '@nestjs/common';
import { LocationService } from './location.service';
import { CreateLocationDto } from './dto/create-location.dto';

import {
  ApiBearerAuth,
  ApiHeader,
  ApiQuery,
  ApiResponse,
} from '@nestjs/swagger';
import { CreateLocationResponse } from './response/create-location.response';
import { GetLocationsResponse } from './response/get-locations.response';

@ApiBearerAuth()
@ApiHeader({
  name: 'Authorization',
  description: 'Jwt Token',
})
@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'Successful response',
    type: CreateLocationResponse,
  })
  async createLocation(
    @Body() createLocationDto: CreateLocationDto,
  ): Promise<any> {
    const location = await this.locationService.createLocation(
      createLocationDto,
    );

    const response = { message: 'createLocation', location: location };
    return response;
  }

  @Get()
  @ApiQuery({
    name: 'users_id',
    description: 'users_id',
    required: false,
    type: String,
  })
  @ApiQuery({
    name: 'page',
    description: 'page',
    required: false,
    type: String,
  })
  @ApiQuery({
    name: 'per_page',
    description: 'per_page',
    required: false,
    type: String,
  })
  @ApiResponse({
    status: 200,
    description: 'Successful response',
    type: GetLocationsResponse,
  })
  async getLocations(
    @Query('users_id') usersId: string,
    @Query('page') page: string,
    @Query('per_page') perPage: string,
  ): Promise<any> {
    const pageInt = page ? parseInt(page, 10) : 1;
    const perPageInt = page ? parseInt(perPage, 10) : 20;

    const locations = await this.locationService.getLocations(
      usersId,
      pageInt,
      perPageInt,
    );

    const response = {
      message: 'getLocations',
      data: locations,
      total: locations.length,
      page: pageInt,
      limit: perPageInt,
    };
    return response;
  }
}
