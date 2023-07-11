import { Controller, Get, Post, Body, Param, Delete, Put,Query } from '@nestjs/common';
import { ContainerService } from './container.service';
import { CreateContainerDto } from './dto/create-container.dto';
import { UpdateContainerDto } from './dto/update-container.dto';
import { SearchDto } from 'src/common/dto/SearchDto';

@Controller('container')
export class ContainerController {
  constructor(private readonly containerService: ContainerService) {}

  @Post()
  create(@Body() createContainerDto: CreateContainerDto) {
    return this.containerService.create(createContainerDto);
  }

  @Get()
  findAll() {
    return this.containerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.containerService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateContainerDto: UpdateContainerDto) {
    return this.containerService.update(+id, updateContainerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.containerService.remove(+id);
  }
  @Get('/search/query')
  searchvehicle(@Query()  query:SearchDto){
  
    try {
      return this.containerService.searchVehicle(query);
    } catch (error) {
      throw error;
    }
   }
}
