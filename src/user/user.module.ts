import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Hashprovider } from './providers/hashProvider/hashProvider';
import { createUserController } from './user.controller';
import { CreateUserRepository } from './user.repository';
import { CreateUserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [createUserController],
  providers: [CreateUserRepository, CreateUserService, Hashprovider],
})
export class UserModule { }
