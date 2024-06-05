import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class ListExpensesInputDto {
    @ApiProperty({ description: 'Lista de despesas', required: true })
    @IsNotEmpty({ message: 'Forneça um Id de usuário' })
    @IsString()
    user_id: string;
}