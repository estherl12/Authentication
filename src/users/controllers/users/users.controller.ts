import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { createDto } from 'src/users/dtos/users.dto';
import { UsersService } from 'src/users/services/users/UsersService';
import * as bcrypt from 'bcrypt';
import { ApiBody, ApiConsumes } from '@nestjs/swagger';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('users')
@ApiConsumes('multipart/form-data')
export class UsersController {
  constructor(private userService: UsersService) {}

  // @Get()
  // getUsers(){
  //    const users = this.userService.findUsers();
  //    return users;
  // }

  @Post('register')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FilesInterceptor('files'))
  @ApiBody({ type: createDto })
  async registerUser(@Body() FormData: createDto) {

    const password = FormData.password;
    console.log(password);
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltOrRounds);
    FormData.password = hashedPassword;
    return await this.userService.createUsers(FormData);
  }
}
