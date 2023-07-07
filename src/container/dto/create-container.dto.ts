
import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateContainerDto {
    @ApiProperty({ description: 'Please enter vehicle code ' })
    @IsString()
    code: string;
}
