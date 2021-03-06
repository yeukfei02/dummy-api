import { Injectable } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
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

  async getLocations(
    usersId: string,
    pageInt: number,
    perPageInt: number,
  ): Promise<location[]> {
    let locations = await this.prisma.location.findMany({
      include: {
        users: true,
      },
      skip: perPageInt * (pageInt - 1),
      take: perPageInt,
      orderBy: {
        created_at: 'desc',
      },
    });

    if (usersId) {
      locations = await this.prisma.location.findMany({
        where: {
          users_id: usersId,
        },
        include: {
          users: true,
        },
        skip: perPageInt * (pageInt - 1),
        take: perPageInt,
        orderBy: {
          created_at: 'desc',
        },
      });
    }

    return locations;
  }
}
