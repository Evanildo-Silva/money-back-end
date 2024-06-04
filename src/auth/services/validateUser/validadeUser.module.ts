import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/entities/user.entity';
import { Hashprovider } from 'src/user/providers/hashProvider/hashProvider';
import { CreateUserRepository } from 'src/user/user.repository';
import { ValidateUserRepository } from './repository/validateUser.repository';
import { ValidateUserService } from './services/validateUser.service';

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    providers: [ValidateUserRepository, CreateUserRepository, ValidateUserService, Hashprovider],
    exports: [ValidateUserService],
})
export class ValidateUserModule { }
