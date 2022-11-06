const UnauthorizedError = require("../errors/unauthorized-error");

const authRequest = (permissionsList) => {
    return (req, res, next) => {
        const userRole = req.session.role;
        if (permissionsList.includes(userRole)) {
            next();
        } else {
            throw new UnauthorizedError();
        }
    };
};

module.exports = { authRequest };
