import { LoginInputDto } from "../../login/dtos/loginInput.dto";
import { ValidateUserOutputDto } from "../dtos/validateUserOutput.dto";

export interface ValidateUserRepositoryInterface {
    validateUser({ email, password }: LoginInputDto): Promise<ValidateUserOutputDto>;
}