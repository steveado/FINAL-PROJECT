const express = require("express");
const {
    getApplications,
    createApplication,
    confirmApplication,
} = require("../controllers/application");
const { permissions } = require("../constants");
const { authRequest } = require("../middlewares/auth-request");

const route = express.Router();

// api/application
route.post(
    "/create",
    authRequest(permissions.MUST_BE_SIGNED_IN),
    createApplication
);

route.get("/all", authRequest(permissions.COURIER_ADMIN), getApplications);
route.get(
    "/confirmApplication/:applicationId",
    authRequest(permissions.ADMIN),
    confirmApplication
);

module.exports = route;
