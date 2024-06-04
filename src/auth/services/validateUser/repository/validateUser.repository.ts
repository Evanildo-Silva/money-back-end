import { HttpException, Injectable } from "@nestjs/common";
import { Hashprovider } from "src/user/providers/hashProvider/hashProvider";
import { CreateUserRepository } from "src/user/user.repository";
import { LoginInputDto } from "../../login/dtos/loginInput.dto";
import { ValidateUserOutputDto } from "../dtos/validateUserOutput.dto";
import { ValidateUserRepositoryInterface } from "../interface/repository.interface";

@Injectable()
export class ValidateUserRepository implements ValidateUserRepositoryInterface {
    constructor(
        private readonly userRepository: CreateUserRepository,
        private readonly hashProvider: Hashprovider
    ) { }

    async validateUser({ email, password }: LoginInputDto): Promise<ValidateUserOutputDto> {
        try {
            const user = await this.userRepository.findByEmail(email)

            const passwordConfirmed = await this.hashProvider.compareHash(
                password,
                user.password
            )

            if (user && passwordConfirmed) {

                return user as unknown as ValidateUserOutputDto;
            }

        } catch (err) {
            throw new HttpException(err.message, err.status);
        }

    }
}