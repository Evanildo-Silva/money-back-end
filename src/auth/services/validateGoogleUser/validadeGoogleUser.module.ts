import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/entities/user.entity';
import { Hashprovider } from 'src/user/providers/hashProvider/hashProvider';
import { CreateUserRepository } from 'src/user/user.repository';
import { ValidateGoogleUserRepository } from './repository/validateGoogleUser.repository';
import { ValidateGoogleUserService } from './services/validateGoogleUser.service';

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    providers: [ValidateGoogleUserRepository, CreateUserRepository, ValidateGoogleUserService, Hashprovider],
    exports: [ValidateGoogleUserService],
})
export class ValidateGoogleUserModule { }
