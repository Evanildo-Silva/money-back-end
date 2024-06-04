import { HttpException, Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Profile, Strategy, VerifyCallback } from 'passport-google-oauth20';
import { ValidateGoogleUserService } from "../services/validateGoogleUser/services/validateGoogleUser.service";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, "google") {
    constructor(
        private validateGoogleUserService: ValidateGoogleUserService
    ) {
        super({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            callbackURL: process.env.GOOGLE_CALLBACK_URL,
            scope: ['email', 'profile']
        })
    }

    async validate(accessToken: string, refreshToken: string, profile: Profile, done: VerifyCallback) {
        const password = profile.id
        const email = profile.emails[0].value
        try {
            if (!email || !password) {
                throw new HttpException(
                    'User google account not found',
                    400,
                );
            }

            return await this.validateGoogleUserService.execute({
                id: profile.id,
                emails: [
                    {
                        value: profile.emails[0].value,
                        verified: profile.emails[0].verified
                    }
                ],
                displayName: profile.displayName
            });
        } catch (err) {
            throw new HttpException(err.message, err.status);
        }
    }
}
