import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateExpenseInputDto {
    @ApiProperty({ description: 'ID do usuário', required: true })
    @IsNotEmpty({ message: 'Forneça um usuário' })
    @IsString()
    user_id: string;

    @ApiProperty({ description: 'Categoria da despesa', required: true })
    @IsNotEmpty({ message: 'Forneça uma categoria' })
    @IsNumber()
    category_id: number;

    @ApiProperty({ description: 'Valor da despesa', required: true })
    @IsNotEmpty({ message: 'Forneça um valor' })
    @IsNumber()
    value: number;

    @ApiProperty({ description: 'Descrição da despesa', required: true })
    @IsNotEmpty({ message: 'Forneça uma descrição' })
    @IsString()
    description: string;

}