import { Controller, Get, Post, Req, Res, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { Request, Response } from "express";
import { GoogleGuard } from '../guards/google.guard';
import { LocalGuard } from '../guards/local.guard';
import { GoogleLoginService } from '../services/googleLogin/services/googleLogin.service';
import { LoginInputDto } from '../services/login/dtos/loginInput.dto';
import { LoginOutputDto } from '../services/login/dtos/loginOutput.dto';
import { LoginService } from '../services/login/services/login.service';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
    constructor(
        private readonly loginService: LoginService,
        private readonly googleLoginService: GoogleLoginService
    ) { }

    @UsePipes(ValidationPipe)
    @UseGuards(LocalGuard)
    @ApiBody({ type: LoginInputDto })
    @ApiCreatedResponse({ type: LoginOutputDto })
    @ApiUnauthorizedResponse({ description: 'Usuário não encontrado' })
    @Post("login")
    async login(@Req() req: Request) {
        const authenticatedUser = this.loginService.execute(req.user)

        return authenticatedUser
    }

    @UsePipes(ValidationPipe)
    @UseGuards(GoogleGuard)
    @Get("/google/redirect")
    async loginWithGoogle(@Req() req: Request, @Res() res: Response) {
        const authenticatedUser = this.googleLoginService.execute(req.user)

        return authenticatedUser
    }
}
