import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { VehicleDto } from './vehicle.dto';
@Injectable()
export class VehicleService {
  constructor(private readonly prismaService: PrismaService) {}

  async createUser(vehicleDto: VehicleDto) {
    return this.prismaService.user.create({
      data: vehicleDto,
    });
  }
}
