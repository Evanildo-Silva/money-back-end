import { CreateUserInputDto } from "../dtos/createUserInput.dto";
import { IUser } from "./user.interface";

export interface IUsersRepository {
    create(data: CreateUserInputDto): Promise<IUser>;
    findByEmail(email: string): Promise<IUser | null>;
}