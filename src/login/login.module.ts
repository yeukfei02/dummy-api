import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { PrismaService } from '../prisma.service';

@Module({
  imports: [],
  controllers: [LoginController],
  providers: [LoginService, PrismaService],
})
export class LoginModule {}
