const permissions = {
    MUST_BE_SIGNED_IN: ["USER", "COURIER", "ADMIN"],
    COURIER_ADMIN: ["ADMIN", "COURIER"],
    ADMIN: ["ADMIN"],
};

module.exports = { permissions };
