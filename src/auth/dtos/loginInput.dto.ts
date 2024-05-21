import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export abstract class LoginInputDto {
    @ApiProperty({ description: 'Email do usuário', required: true })
    @IsNotEmpty({ message: 'Forneça um email para o fazer o login' })
    @IsString()
    public email: string;

    @ApiProperty({ description: 'Senha do usuário', required: true })
    @IsNotEmpty({ message: 'Forneça uma senha para o fazer o login' })
    @IsString()
    public password: string;
}