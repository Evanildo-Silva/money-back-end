import {
    IsDate,
    IsNumber,
    IsString
} from 'class-validator';

export abstract class UpdateExpenseOutputDto {
    @IsNumber()
    public id: number;

    @IsNumber()
    public value: number;

    @IsString()
    public description: string;

    @IsNumber()
    public category_id: number;

    @IsString()
    public user_id: string;

    @IsDate()
    public updated_at: Date;
}