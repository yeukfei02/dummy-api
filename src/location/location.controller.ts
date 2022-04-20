import { Controller, Post, Get, Body } from '@nestjs/common';
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
  async getLocations(): Promise<any> {
    const locations = await this.locationService.getLocations();

    const response = { message: 'getLocations', locations: locations };
    return response;
  }
}
