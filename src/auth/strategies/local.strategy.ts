import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { LoginInputDto } from '../dtos/loginInput.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super();
    }

    validate({ email, password }: LoginInputDto) {
        const user = this.authService.execute({ email, password });
        if (!user) throw new UnauthorizedException();
        return user;
    }
}