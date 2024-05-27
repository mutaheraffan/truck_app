import { Injectable, NotFoundException } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { sign } from 'jsonwebtoken';
import { AuthenticateDto } from './dto/authenticate.dto';
import { IAuthenticate, Role } from './interfaces/user.interface';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}
  

  async authenticate(authenticateDto: AuthenticateDto): Promise<IAuthenticate> {
    try{
    // Retrieve user data by username
    const user = await this.userService.findByUserName(authenticateDto.userName);
  

    // Check if user exists and password matches
    if (!user || user.password != authenticateDto.password)  {
      throw new NotFoundException('Invalid credentials');
    }
    
    // Generate JWT token
    const token = sign({ ...user }, 'secret');

    console.log(token);
    console.log(user);
    // Return authentication data
    return { token, user } as IAuthenticate;
  } catch(error) {
    // Handle any errors
    throw new NotFoundException('User Not Found');
  }
}
}