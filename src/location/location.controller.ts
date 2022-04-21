import { Controller, Post, Get, Body, Query } from '@nestjs/common';
import { LocationService } from './location.service';
import { CreateLocationDto } from './dto/createLocation.dto';

import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { CreateLocationResponse } from './response/createLocation.response';
import { GetLocationsResponse } from './response/getLocations.response';

@ApiBearerAuth()
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
  @ApiResponse({
    status: 200,
    description: 'Successful response',
    type: GetLocationsResponse,
  })
  async getLocations(
    @Query('users_id') users_id: string,
    @Query('page') page: string,
    @Query('per_page') perPage: string,
  ): Promise<any> {
    const usersId = users_id;
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
