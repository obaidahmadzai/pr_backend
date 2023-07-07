import { Controller, Post, Body } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { VehicleDto } from './vehicle.dto';
@Controller('vehicle')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Post('create/user')
  createUser(@Body() vehicleDto: VehicleDto) {
    try {
      return this.vehicleService.createUser(vehicleDto);
    } catch (error) {
      throw error;
    }
  }
}
