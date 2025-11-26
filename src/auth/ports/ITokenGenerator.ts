export interface tokenGenerator {
        sign(claim: any, options: any): string;
        verify(token: string): any;
}
