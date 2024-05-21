import { IsString } from "class-validator";

export abstract class LoginPayloadDto {
    @IsString()
    public id: string;
}