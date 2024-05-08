import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserInputDto } from './dtos/createUserInput.dto';
import { CreateUserService } from './user.service';

@Controller('user')
export class createUserController {
    constructor(private readonly createUserService: CreateUserService) { }
    @Post()
    async createUser(@Body() createUser: CreateUserInputDto) {
        return this.createUserService.execute(createUser)
    }
}