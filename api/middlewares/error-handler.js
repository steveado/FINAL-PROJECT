const ExistingUser = require("../errors/existing-user");
const RequestValidationError = require("../errors/request-validation-error");
const SignInError = require("../errors/sign-in-error");
const UnauthorizedError = require("../errors/unauthorized-error");

const errorHandler = (err, req, res, next) => {
    console.log("error middleware: ", err);

    if (
        err instanceof RequestValidationError ||
        ExistingUser ||
        SignInError ||
        UnauthorizedError
    ) {
        res.status(err.statusCode).json({
            errors: err.serializeErrors(),
        });
    }
};

module.exports = errorHandler;
