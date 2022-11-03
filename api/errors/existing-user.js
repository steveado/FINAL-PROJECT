class ExistingUser extends Error {
    statusCode = 407;
    constructor() {
        super("User with this email already exists");
    }

    serializeErrors() {
        return [{ message: this.message }];
    }
}

module.exports = ExistingUser;
