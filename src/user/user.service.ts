import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserInputDto } from './dtos/createUserInput.dto';
import { Hashprovider } from './providers/hashProvider/hashProvider';
import { CreateUserRepository } from './user.repository';

@Injectable()
export class CreateUserService {
    constructor(
        private readonly createUserRepository: CreateUserRepository,
        private readonly hashProvider: Hashprovider
    ) { }

    async execute({ name, email, password }: CreateUserInputDto) {
        const emailExists = await this.createUserRepository.findByEmail(email)

        if (emailExists) {
            throw new HttpException(
                'Usuário já cadastrado',
                HttpStatus.BAD_REQUEST,
            );
        }

        if (!password) {
            throw new HttpException(
                'Senha não informada',
                HttpStatus.BAD_REQUEST,
            );
        }

        const hashedPassword = await this.hashProvider.generateHash(password);

        const user = await this.createUserRepository.create({
            name,
            email,
            password: hashedPassword,
        });

        return user;
    }
}
