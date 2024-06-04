import { ApiProperty } from '@nestjs/swagger';

export class ValidateUserOutputDto {
    @ApiProperty()
    id: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    email: string;
}