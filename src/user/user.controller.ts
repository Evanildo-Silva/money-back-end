import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserInputDto } from './dtos/createUserInput.dto';
import { CreateUserService } from './user.service';

@ApiTags('Users')
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
