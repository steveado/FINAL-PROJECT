class UnauthorizedError extends Error {
    statusCode = 400;
    constructor() {
        super("You are unauthorized to access this");
    }

    serializeErrors() {
        return { "message": this.message };
    }
}

module.exports = UnauthorizedError;
