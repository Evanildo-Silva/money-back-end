import { HttpException, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { ValidateUserService } from '../services/validateUser/services/validateUser.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private validateUserService: ValidateUserService) {
        super({
            usernameField: 'email',
            passwordField: 'password',
        });
    }

    async validate(email: string, password: string) {
        try {
            if (!email || !password) {
                throw new HttpException(
                    'email and password are required',
                    400,
                );
            }

            return await this.validateUserService.execute(email, password);
        } catch (err) {
            throw new HttpException(err.message, err.status);
        }
    }
}
