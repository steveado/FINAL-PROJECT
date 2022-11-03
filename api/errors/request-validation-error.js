class RequestValidationError extends Error {
    statusCode = 400;
    constructor(errors) {
        super();
        this.errors = errors;
    }

    serializeErrors() {
        let formatted = this.errors.map((i) => {
            return { "message": i.msg, "field": i.param };
        });
        return formatted;
    }
}

module.exports = RequestValidationError;
