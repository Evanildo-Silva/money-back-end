import { Body, Controller, Get, Post, Req, Res, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginInputDto } from './dtos/loginInput.dto';
import { LoginOutputDto } from './dtos/loginOutput.dto';
import { GoogleGuard } from './guards/google.guard';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @UsePipes(ValidationPipe)
    @Post()
    async login(@Body() loginInputDto: LoginInputDto): Promise<LoginOutputDto> {
        const authenticatedUser = this.authService.execute(loginInputDto)

        return authenticatedUser
    }

    @UsePipes(ValidationPipe)
    @UseGuards(GoogleGuard)
    @Get("/google/redirect")
    async loginWithGoogle(@Req() req, @Res() res: Response) {
        const authenticatedUser = this.authService.googleAuthRedirect(req.user, res)

        return authenticatedUser
    }
}
