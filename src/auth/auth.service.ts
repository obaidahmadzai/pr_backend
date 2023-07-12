import { Injectable } from '@nestjs/common';
import { SignupDto } from './dto/Signup.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { HashingService } from 'src/common/hashing/hashing.service';
import { promises } from 'dns';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {

    constructor(private prismaService: PrismaService, private HashingService:HashingService){}



    async signup(SignupDto: SignupDto){
        const hash =  await this.HashingService.hash(SignupDto.password);
       const  data = await this.prismaService.user.create({
            data: {
                name: SignupDto.name,
                email: SignupDto.email,
                password: hash
            }
        });

        delete  data.password;
        return data;
    }

    async signinToken(data:any): Promise<any>{
         JwtService
    }
}
