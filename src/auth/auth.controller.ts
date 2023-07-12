import { Controller,Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDto } from './dto/Signup.dto';
import { SigninpDto } from './dto/Signin.dto';

@Controller('auth')
export class AuthController {
    constructor(private AuthService:AuthService) {}

@Post('signup')
async signup(@Body() SignupDto:SignupDto){
  return this.AuthService.signup(SignupDto);
}

@Post('signin')
signin(@Body() data:SigninpDto){
  
}


}
