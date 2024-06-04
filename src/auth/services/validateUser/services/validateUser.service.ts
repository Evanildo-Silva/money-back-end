import { HttpException, Injectable } from '@nestjs/common';
import { ValidateUserOutputDto } from '../dtos/validateUserOutput.dto';
import { ValidateUserRepository } from '../repository/validateUser.repository';

@Injectable()
export class ValidateUserService {
    constructor(
        private validateUserRepository: ValidateUserRepository,
    ) { }

    async execute(email: string, password: string): Promise<ValidateUserOutputDto> {
        if (typeof email !== 'string' || typeof password !== 'string') {
            throw new HttpException('Usuário e senha são obrigatórios', 400);
        }

        try {
            const user = await this.validateUserRepository.validateUser({
                email,
                password
            });

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
