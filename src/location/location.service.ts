import { Injectable } from '@nestjs/common';
import { CreateLocationDto } from './dto/createLocation.dto';
import { PrismaService } from '../prisma.service';
import { location } from '@prisma/client';

@Injectable()
export class LocationService {
  constructor(private readonly prisma: PrismaService) {}

  async createLocation(
    createLocationDto: CreateLocationDto,
  ): Promise<location> {
    const location = await this.prisma.location.create({
      data: {
        street: createLocationDto.street,
        city: createLocationDto.city,
        state: createLocationDto.state,
        country: createLocationDto.country,
        timezone: createLocationDto.timezone,
        users_id: createLocationDto.users_id,
      },
      include: {
        users: true,
      },
    });
    return location;
  }

  async getLocations(pageInt: number, perPageInt: number): Promise<location[]> {
    const locations = await this.prisma.location.findMany({
      include: {
        users: true,
      },
      skip: perPageInt * (pageInt - 1),
      take: perPageInt,
    });
    return locations;
  }
}
