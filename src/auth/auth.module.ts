import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/entities/user.entity';
import { Hashprovider } from 'src/user/providers/hashProvider/hashProvider';
import { UserModule } from 'src/user/user.module';
import { CreateUserRepository } from 'src/user/user.repository';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { GoogleStrategy } from './strategies/google.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_EXPIRES_IN },
    })
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    CreateUserRepository,
    Hashprovider,
    LocalStrategy,
    JwtStrategy,
    GoogleStrategy
  ]
})
export class AuthModule { }
