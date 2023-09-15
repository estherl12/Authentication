import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/user';
import { UsersService } from 'src/users/services/users/UsersService';
import { LocalStrategy } from './localstrategy.auth';
import { UsersController } from 'src/users/controllers/users/users.controller';

@Module({
  imports: [
    PassportModule,
    UsersModule,
    JwtModule.register({
      secret: 'secretKey',
      signOptions: { expiresIn: '60s' },
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AuthController, UsersController],
  providers: [AuthService, UsersService, LocalStrategy],
})
export class AuthModule {}
