import { IsString,IsEmail } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";


export class SignupDto {
 
    @ApiProperty({ description: 'Please enter Your Name' })
    @IsString()
    name:string
    @ApiProperty({ description: 'Please enter Your Email' })
    @IsEmail()
    email: string
    @ApiProperty({ description: 'Please enter Your Passwords' })
    @IsString()
    password:string
   

}