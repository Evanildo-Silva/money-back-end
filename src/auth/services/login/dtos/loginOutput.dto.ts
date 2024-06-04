import { ApiProperty } from '@nestjs/swagger';
import { LoginDto } from './login.dto';

export class LoginOutputDto extends LoginDto {
    @ApiProperty()
    accessToken: string;
}
