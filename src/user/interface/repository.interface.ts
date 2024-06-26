import { CreateUserInputDto } from "../dtos/createUserInput.dto";
import { UserEntity } from "../entities/user.entity";

export interface IUsersRepository {
    create(user: CreateUserInputDto): Promise<UserEntity>;
    findByEmail(email: string): Promise<UserEntity | null>;
}