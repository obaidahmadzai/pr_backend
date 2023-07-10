
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsOptional, IsString, IsNumber,  } from 'class-validator';
export class SearchDto  {

  
    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    @Transform(({ value }) => value.trim())
    search: string;
  
    // @ApiProperty({ required: false, description: 'Value shoule be object {{}}' })
    // @IsString()
    // @IsOptional()
    // filterData: String;
  }