import { Controller, Post, Get, Body, Query } from '@nestjs/common';
import { LocationService } from './location.service';
import { CreateLocationDto } from './dto/createLocation.dto';

@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Post()
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
  async getLocations(
    @Query('page') page: string,
    @Query('per_page') perPage: string,
  ): Promise<any> {
    const pageInt = page ? parseInt(page, 10) : 1;
    const perPageInt = page ? parseInt(perPage, 10) : 20;

    const locations = await this.locationService.getLocations(
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
