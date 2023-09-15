import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/user';
import { createDto } from 'src/users/dtos/users.dto';
import { CreateUserParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepository:Repository<User>){}

async findUsers(query:object): Promise<User>{
    
    return this.userRepository.findOne(query);
}

 async createUsers(userDetails:createDto){
    
    
    const newUsers = new User()
    newUsers.email=userDetails.email
    newUsers.mobile=userDetails.mobile
    newUsers.name= userDetails.name
    newUsers.password=userDetails.password
    
    console.log( newUsers);
    
  return  await this.userRepository.save(newUsers)


}

}


