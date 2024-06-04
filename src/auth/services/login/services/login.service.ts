import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from '../dtos/login.dto';

@Injectable()
export class LoginService {
    constructor(private jwtService: JwtService) { }

    async execute(user: LoginDto) {
        const { id, name, email } = user
        const accessToken = await this.jwtService.signAsync({ id, name, email }, {
            secret: process.env.JWT_SECRET,
        });

        return {
            accessToken,
            id,
            name,
            email
        };
    }
}
