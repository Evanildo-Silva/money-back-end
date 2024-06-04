import { HttpException, Injectable } from "@nestjs/common";
import { Hashprovider } from "src/user/providers/hashProvider/hashProvider";
import { CreateUserRepository } from "src/user/user.repository";
import { GoogleLoginDto } from "../../googleLogin/dtos/googleLogin.dto";
import { ValidateGoogleUserOutputDto } from "../dtos/validateGoogleUserOutput.dto";
import { ValidateGoogleUserRepositoryInterface } from "../interface/repository.interface";

@Injectable()
export class ValidateGoogleUserRepository implements ValidateGoogleUserRepositoryInterface {
    constructor(
        private readonly userRepository: CreateUserRepository,
        private readonly hashProvider: Hashprovider
    ) { }

    async validateUser(userGoogle: GoogleLoginDto): Promise<ValidateGoogleUserOutputDto> {
        try {
            const user = await this.userRepository.findByEmail(userGoogle.emails[0].value)
            if (user) {

                const passwordConfirmed = await this.hashProvider.compareHash(
                    userGoogle.id,
                    user.password
                )

                if (user && passwordConfirmed) {

                    return user as ValidateGoogleUserOutputDto;
                }
            }

            const hashedPassword = await this.hashProvider.generateHash(userGoogle.id);

            const newUserWithGoogle = await this.userRepository.create({
                name: userGoogle.displayName,
                email: userGoogle.emails[0].value,
                password: hashedPassword,
            })

            return newUserWithGoogle as ValidateGoogleUserOutputDto


        } catch (err) {
            throw new HttpException(err.message, err.status);
        }

    }
}