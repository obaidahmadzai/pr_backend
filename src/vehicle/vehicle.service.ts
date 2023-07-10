import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { VehicleDto } from './vehicle.dto';
import { SearchDto } from 'src/common/dto/SearchDto';
const searchColumns = ['make', 'model', 'color', 'registrationNumber'];
@Injectable()
export class VehicleService {
 
  constructor(private readonly prismaService: PrismaService) {}
  async allVehicles(){
    return this.prismaService.vehicle.findMany(
      {
        include :{
          container: true
        }
      }
    );
  }
  async getVehicle( id: number){
    return this.prismaService.vehicle.findUnique({
      where: {
        id: Number(id)
      }
    });
  }

  async createVehicle(vehicleDto: VehicleDto) {
    return this.prismaService.vehicle.create({
      data: vehicleDto
    
    });
  }
  async updateVehicle(vehicleDto: VehicleDto, id: number) {
   
       return  this.prismaService.vehicle.update({
        where: {
          id: +id
        },
        data: vehicleDto
       })
  }


  async deleteVehicle(id: number){
    return this.prismaService.vehicle.delete({
      where: {
        id: Number(id)
      }
    })
  }
  async searchVehicle(param: SearchDto) {
    return this.prismaService.vehicle.findMany({
      where: {
        OR:  searchColumns.map(column => ({
          
             [column]: {
               contains: param.search,
               mode: 'insensitive'
             }
           }))
      },
      
        include :{
          container: true
        }
      
      
    });
  }
}


//search
// searchColumns.map(column => ({
//   [column]: {
//     contains: param.search,
//     mode: 'insensitive'
//   }
// }))