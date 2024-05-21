import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Hashprovider } from 'src/user/providers/hashProvider/hashProvider';
import { CreateUserRepository } from 'src/user/user.repository';
import { LoginInputDto } from './dtos/loginInput.dto';
import { LoginOutputDto } from './dtos/loginOutput.dto';
import { LoginWithGoogleDto } from './dtos/loginWithGoogle.dto';

@Injectable()
export class AuthService {
    constructor(
        private readonly userRepository: CreateUserRepository,
        private readonly hashProvider: Hashprovider,
        private jwtService: JwtService,
    ) { }

    async execute({ email, password }: LoginInputDto): Promise<LoginOutputDto> {
        const user = await this.userRepository.findByEmail(email)

        if (!user) {
            throw new HttpException(
                'Email/Senha incorretos',
                HttpStatus.BAD_REQUEST,
            );
        }

        const passwordConfirmed = await this.hashProvider.compareHash(
            password,
            user.password
        )

        if (!passwordConfirmed) {
            throw new HttpException(
                'Email/Senha incorretos',
                HttpStatus.BAD_REQUEST,
            );
        }

        const accessToken = await this.jwtService.signAsync(
            {
                id: user.id
            },
            {
                secret: process.env.JWT_SECRET,
                expiresIn: process.env.JWT_EXPIRES_IN,
            },
        );
        return {
            accessToken,
            user,
        }
    }

    async googleAuthRedirect(userGoogle: LoginWithGoogleDto, res: Response) {
        if (!userGoogle) return new NotFoundException('User google account not found');
        const user = await this.userRepository.findByEmail(userGoogle.emails[0].value)

        if (user) {
            const accessToken = await this.jwtService.signAsync(
                {
                    id: user.id
                },
                {
                    secret: process.env.JWT_SECRET,
                    expiresIn: process.env.JWT_EXPIRES_IN,
                },
            );
            console.log("🚀 final", user, accessToken)
            return {
                accessToken,
                user,
            }
        }

        const hashedPassword = await this.hashProvider.generateHash(userGoogle.id);

        const newUserWithGoogle = await this.userRepository.create({
            name: userGoogle.displayName,
            email: userGoogle.emails[0].value,
            password: hashedPassword,
        })

        const accessToken = await this.jwtService.signAsync(
            {
                id: newUserWithGoogle.id
            },
            {
                secret: process.env.JWT_SECRET,
                expiresIn: process.env.JWT_EXPIRES_IN,
            },
        );
        console.log("🚀 final", newUserWithGoogle, accessToken)
        return {
            accessToken,
            newUserWithGoogle,
        }


    }
}
