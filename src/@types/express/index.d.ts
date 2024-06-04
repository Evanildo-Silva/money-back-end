/*
 * Sobrescrevendo a interface "Request" do framework Express.js para adicionar a propriedade id
 */
declare namespace Express {
    export interface User {
        id: string;
        name: string;
        email: string;
        emails: [{
            value: string,
            verified: boolean
        }];
        displayName: string;
    }
}
