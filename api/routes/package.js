const express = require("express");
const { createPackage, getAllPackages } = require("../controllers/package");
const { authRequest } = require("../middlewares/auth-request");
const { permissions } = require("../constants");

const route = express.Router();

// "/api/package"
route.post(
    "/create",
    authRequest(permissions.MUST_BE_SIGNED_IN),
    createPackage
);

route.get("/all", authRequest(permissions.COURIER_ADMIN), getAllPackages);

module.exports = route;
