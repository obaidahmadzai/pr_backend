
import { ApiProperty } from "@nestjs/swagger";

import { IsEmail, IsString } from "class-validator";

export class SigninpDto  {
    @ApiProperty({ description: 'Please enter Your Email' })
    @IsEmail()
    email: string
    @ApiProperty({ description: 'Please enter Your Password' })
    @IsString()
    password:string
}