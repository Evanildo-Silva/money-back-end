import { ApiProperty } from '@nestjs/swagger';
import {
    IsNotEmpty,
    IsNumber,
    IsString
} from 'class-validator';

export class UpdateExpenseInputDto {
    @ApiProperty({ type: Number, description: 'Id da despesa' })
    @IsNotEmpty({ message: 'Forneça um Id' })
    @IsNumber()
    id: number;

    @ApiProperty({ type: Number, description: 'Valor da despesa' })
    @IsNotEmpty({ message: 'Forneça um valor' })
    @IsNumber()
    value: number;

    @ApiProperty({ type: String, description: 'Descrição da despesa' })
    @IsNotEmpty({ message: 'Forneça uma descrição' })
    @IsString()
    description: string;

    @ApiProperty({ type: Number, description: 'Categoria da despesa' })
    @IsNotEmpty({ message: 'Forneça uma categoria' })
    @IsNumber()
    category_id: number;

    @ApiProperty({ type: String, description: 'Usuário da despesa' })
    @IsNotEmpty({ message: 'Forneça um usuário' })
    @IsString()
    user_id: string;
}