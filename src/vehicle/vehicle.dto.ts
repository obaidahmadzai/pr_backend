import { IsString, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class VehicleDto {
  @ApiProperty({ description: 'please enter your Name' })
  @IsString()
  name: string;
  @ApiProperty({ description: 'please enter your Email' })
  @IsEmail()
  email: string;
}
