import { Module } from '@nestjs/common';
import { GoogleLoginModule } from './googleLogin/googleLogin.module';
import { LoginModule } from './login/login.module';
import { ValidateUserModule } from './validateUser/validadeUser.module';


@Module({
    imports: [LoginModule, GoogleLoginModule, ValidateUserModule],
    exports: [LoginModule, GoogleLoginModule, ValidateUserModule],
})
export class AuthServicesModule { }
