export class LoginWithGoogleDto {
    id: string
    emails: [{
        value: string,
        verified: boolean
    }];
    displayName: string;
}