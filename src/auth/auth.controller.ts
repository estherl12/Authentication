import { Controller,Post,UseGuards,Request, Body, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { request } from 'http';
import { createDto } from 'src/users/dtos/users.dto';
import { ApiConsumes } from '@nestjs/swagger';
import { loginDto } from 'src/users/dtos/login.dto';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller()
export class AuthController {
    
    constructor (private authService:AuthService){}

    // @UseGuards(AuthGuard())
 @Post('auth/login')
 @UseInterceptors(FilesInterceptor('files'))

 @ApiConsumes("multipart/form-data")
    
    async login(@Body() signInDto: loginDto){
        console.log(signInDto.email, signInDto.password);
        
        return this.authService.validateUser(signInDto.email,signInDto.password);
    }
}
