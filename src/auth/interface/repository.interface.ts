import { UserEntity } from "src/user/entities/user.entity";

export interface IAuthRepository {
    findByEmail(email: string): Promise<UserEntity | null>;
}