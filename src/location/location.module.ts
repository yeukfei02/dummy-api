import { Module } from '@nestjs/common';
import { LocationController } from './location.controller';
import { LocationService } from './location.service';
import { PrismaService } from '../prisma.service';

@Module({
  imports: [],
  controllers: [LocationController],
  providers: [LocationService, PrismaService],
})
export class LocationModule {}
