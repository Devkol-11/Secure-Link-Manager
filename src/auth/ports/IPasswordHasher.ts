export interface passwordHasher {
        hash(plainPassword: string): Promise<string>;

        compare(
                incomingPassword: string,
                userPassword: string
        ): Promise<boolean>;
}
