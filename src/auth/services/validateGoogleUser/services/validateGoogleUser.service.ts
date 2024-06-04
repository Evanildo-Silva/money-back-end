import { HttpException, Injectable } from '@nestjs/common';
import { GoogleLoginDto } from '../../googleLogin/dtos/googleLogin.dto';
import { ValidateGoogleUserOutputDto } from '../dtos/validateGoogleUserOutput.dto';
import { ValidateGoogleUserRepository } from '../repository/validateGoogleUser.repository';

@Injectable()
export class ValidateGoogleUserService {
    constructor(
        private validateUserRepository: ValidateGoogleUserRepository,
    ) { }

    async execute(userGoogle: GoogleLoginDto): Promise<ValidateGoogleUserOutputDto> {
        if (typeof userGoogle.emails[0].value !== 'string' || typeof userGoogle.id !== 'string') {
            throw new HttpException('Usuário e senha são obrigatórios', 400);
        }

        try {
            const user = await this.validateUserRepository.validateUser(userGoogle);

            if (!user) {
                throw new HttpException('Usuário ou senha incorretos!', 400);
            }

            return {
                ...user,
            };
        } catch (err) {
            if (err instanceof HttpException) throw err;
            throw new HttpException(err.message, 400);
        }
    }
}
