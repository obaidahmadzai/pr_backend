import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { HashingService } from 'src/common/hashing/hashing.service';
import { BcryptService } from 'src/common/hashing/bcrypt.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    PrismaService,
    {
      provide: HashingService,
      useClass: BcryptService,
    },
  ]
})
export class AuthModule {}
