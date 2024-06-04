import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { GoogleLoginInputDto } from "../dtos/googleLoginInput.dto";

@Injectable()
export class GoogleLoginService {
    constructor(private jwtService: JwtService) { }
    async execute(userGoogle: GoogleLoginInputDto) {

        const accessToken = await this.jwtService.signAsync(
            {
                id: userGoogle.id,
                name: userGoogle.name,
                email: userGoogle.email
            }, {
            secret: process.env.JWT_SECRET,
        });

        return {
            accessToken,
            id: userGoogle.id,
            name: userGoogle.name,
            email: userGoogle.email
        };
    }
}
