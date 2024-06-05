import { IsDate, IsNumber, IsString } from "class-validator";

export class ListExpensesOutputDto {
    @IsNumber()
    id: number;
    @IsNumber()
    value: number;

    @IsString()
    description: string;

    @IsNumber()
    category_id: number;

    @IsString()
    user_id: string;

    @IsDate()
    created_at: Date;

    @IsDate()
    updated_at: Date;
}