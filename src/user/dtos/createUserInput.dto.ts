import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserInputDto {
  @ApiProperty({ description: 'Nome do usuário', required: true })
  @IsNotEmpty({ message: 'Forneça um nome para o usuário' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Email do usuário', required: true })
  @IsEmail({}, { message: 'Formato de email inválido' })
  @IsNotEmpty({ message: 'Forneça um email válido' })
  @IsString()
  email: string;

  @ApiProperty({ description: 'Senha do usuário', required: true, minLength: 6 })
  @IsNotEmpty({ message: 'Forneça uma senha' })
  @MinLength(6, { message: 'A senha deve ter pelo menos 6 caracteres' })
  @IsString()
  password: string;
}