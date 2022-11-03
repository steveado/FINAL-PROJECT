class SignInError extends Error {
    statusCode = 407;
    constructor() {
        super("Invalid sign-in credentials");
    }

    serializeErrors() {
        return [{ message: this.message }];
    }
}

module.exports = SignInError;
