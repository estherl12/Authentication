import { Injectable, NotAcceptableException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/services/users/UsersService';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/user';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  async validateUser(email: string, password: string) {
    const user = await this.usersService.findUsers({ where: { email } });
    console.log(email, password);

    if (!user) {
      throw new NotAcceptableException('could not find the users');
    }
    const passwordValid = await bcrypt.compare(password, user.password);
    if (user && passwordValid) {
      const playload = { email: user.email, sub: user.id };
      const token = this.jwtService.sign(playload);

      if (token) {
        user.accesstoken = token;
      }
      console.log(token);
      
      return token;
    }
  }

  // async login(user:any){
  //  const playload = { email: user.email , sub :user.id}
  //  return{
  //     access_token : this.jwtService.sign(playload)
  //  }

  // }
}
