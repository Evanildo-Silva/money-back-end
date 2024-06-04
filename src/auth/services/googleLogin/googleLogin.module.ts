import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { GoogleLoginService } from './services/googleLogin.service';

@Module({
    imports: [JwtModule],
    providers: [GoogleLoginService],
    exports: [GoogleLoginService],
})
export class GoogleLoginModule { }