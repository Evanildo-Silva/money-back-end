export class GoogleLoginDto {
    id: string
    emails: [{
        value: string,
        verified: boolean
    }];
    displayName: string;
    name?: string;
    email?: string;
}