import { GoogleLoginDto } from "../../googleLogin/dtos/googleLogin.dto";
import { ValidateGoogleUserOutputDto } from "../dtos/validateGoogleUserOutput.dto";

export interface ValidateGoogleUserRepositoryInterface {
    validateUser(userGoogle: GoogleLoginDto): Promise<ValidateGoogleUserOutputDto>;
}