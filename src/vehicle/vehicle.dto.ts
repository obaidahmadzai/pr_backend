import { IsString, IsEmail, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class VehicleDto {
  @ApiProperty({ description: 'Please enter vehicle Name' })
  @IsString()
  make: string;
  @ApiProperty({ description: 'Please enter vehicle  Model' })
  @IsString()
  model: string;

  @ApiProperty({ description: 'Please enter  vehicle Year' })
  @IsNumber()
  year: number;

  @ApiProperty({ description: 'Please enter vehicle color' })
  @IsString()
  color: string;

  @ApiProperty({ description: 'Please enter vehicle registration Number' })
  @IsString()
  registrationNumber: string

  @ApiProperty({ description: 'Please enter containerID ' })
  @IsNumber()
  containerId: number
}
