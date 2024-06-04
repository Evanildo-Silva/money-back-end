import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { LoginPayloadDto } from '../dtos/loginPayload.dto';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET,
        });
    }

    async validate(payload: LoginPayloadDto & { iat: number; exp: number }) {
        const { iat: _iat, exp: _exp, ...payloadSpread } = payload;
        return { ...payloadSpread };
    }
}