import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { LoginService } from './services/login.service';

@Module({
    imports: [JwtModule],
    providers: [LoginService],
    exports: [LoginService],
})
export class LoginModule { }