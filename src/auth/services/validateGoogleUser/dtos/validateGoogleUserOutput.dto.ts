import { ApiProperty } from '@nestjs/swagger';

export class ValidateGoogleUserOutputDto {
    @ApiProperty()
    id: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    email: string;
}