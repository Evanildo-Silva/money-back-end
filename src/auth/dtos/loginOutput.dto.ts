import { IsString } from 'class-validator';
import { IUser } from 'src/user/interface/user.interface';

export abstract class LoginOutputDto {
    @IsString()
    public user: IUser;

    @IsString()
    public accessToken: any;
}