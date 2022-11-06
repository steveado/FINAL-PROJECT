class NotExistingError extends Error {
    statusCode = 400;
    constructor(error) {
        super(error);
    }

    serializeErrors() {
        return { message: this.message };
    }
}

module.exports = NotExistingError;
