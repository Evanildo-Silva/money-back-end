import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserInputDto } from "./dtos/createUserInput.dto";
import { UserEntity } from "./entities/user.entity";
import { IUsersRepository } from "./interface/repository.interface";

@Injectable()
export class CreateUserRepository implements IUsersRepository {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ) { }

    public async create({ ...rest }: CreateUserInputDto): Promise<UserEntity> {
        const user = this.userRepository.create({ ...rest });

        await this.userRepository.save(user);

        return user;
    }

    public async findByEmail(email: string): Promise<UserEntity | null> {
        const user = await this.userRepository.findOneBy({ email });

        return user;
    }
}