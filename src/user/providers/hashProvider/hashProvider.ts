import { Injectable } from "@nestjs/common";
import { compare, hash } from "bcrypt";
import { IHashProvider } from "src/user/interface/hashProvider.interface";

@Injectable()
export class Hashprovider implements IHashProvider {
    public async generateHash(payload: string): Promise<string> {
        const saltRounds = 10;
        return hash(payload, saltRounds);
    }

    public async compareHash(payload: string, hashed: string): Promise<boolean> {
        return compare(payload, hashed);
    }
}