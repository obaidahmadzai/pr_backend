import { Module } from '@nestjs/common';
import { ContainerService } from './container.service';
import { ContainerController } from './container.controller';
import { PrismaService } from 'src/prisma/prisma.service';
@Module({
  controllers: [ContainerController],
  providers: [ContainerService, PrismaService]
})
export class ContainerModule {}
