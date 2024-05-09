import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserInputDto } from './dtos/createUserInput.dto';
import { CreateUserService } from './user.service';

@Controller('user')
export class createUserController {
    constructor(private readonly createUserService: CreateUserService) { }

    @UsePipes(ValidationPipe)
    @Post()
    async createUser(@Body() createUser: CreateUserInputDto) {
        const newUser = await this.createUserService.execute(createUser)

        return newUser
    }
}
