import { Injectable } from '@nestjs/common';
import { CreateContainerDto } from './dto/create-container.dto';
import { UpdateContainerDto } from './dto/update-container.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ContainerService {
   constructor(private readonly prismaService: PrismaService) {}

   async create(createContainerDto: CreateContainerDto) {
    return this.prismaService.container.create({
      data: createContainerDto
    })
  }

  async findAll() {
    return this.prismaService.container.findMany(
      {
      include: {
        vehicles:true
      }
      }
    );
  }

  findOne(id: number) {
    return this.prismaService.container.findUnique({
      where: {
        id: id
      }
    })
  }

  update(id: number, updateContainerDto: UpdateContainerDto) {
    return this.prismaService.container.update({
      where: {
        id: id
      },
      data: updateContainerDto
    });
  }

  remove(id: number) {
    return this.prismaService.container.delete({
      where: {
        id: id
      }
    });
  }
}
