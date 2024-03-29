import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VehicleModule } from './vehicle/vehicle.module';
import { ContainerModule } from './container/container.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [VehicleModule, ContainerModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
