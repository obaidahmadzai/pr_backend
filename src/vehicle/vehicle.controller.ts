import { Controller, Get, Post,Put, Delete, Body, Param } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { VehicleDto } from './vehicle.dto';
@Controller('vehicle')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}


  @Get()
  allVehicles(){
    return this.vehicleService.allVehicles();
  }

  @Get(':id')
  getVehicle(@Param('id') id: number){
    return this.vehicleService.getVehicle(id);
  }

  

  @Post()
  createVehicle(@Body() vehicleDto: VehicleDto) {
   
    try {
      return this.vehicleService.createVehicle(vehicleDto);
    } catch (error) {
      throw error;
    }
  }

  @Put(':id')
   updateVehicle(@Body() vehicleDto: VehicleDto, @Param('id') id: number){
    try {
      return this.vehicleService.updateVehicle(vehicleDto,id);
    } catch (error) {
      throw error;
    }
   }


   @Delete(':id')
    deleteVehicle(@Param('id') id: number){
      try {
        return this.vehicleService.deleteVehicle(id);
      } catch (error) {
        throw error;
      }
    }
}
