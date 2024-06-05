import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class FindExpenseByDescriptionInputDto {
    @ApiProperty({ description: 'Descrição da despesa', required: true })
    @IsNotEmpty({ message: 'Forneça uma descrição' })
    @IsString()
    description: string;
}