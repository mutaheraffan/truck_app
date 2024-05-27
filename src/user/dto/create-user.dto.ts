import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Role } from 'src/auth/interfaces/user.interface';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  @IsEmail()
  password: string;

  @IsNotEmpty()
  role: Role;  
}
