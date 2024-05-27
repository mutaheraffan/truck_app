import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { UserModule } from 'src/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/entities/user.entity';

@Module({
  // imports: [UserModule],
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [AuthService, UserService],
  controllers: [AuthController],
})
export class AuthModule {}
