const express = require("express");
const permissions = require("../constants");
const { authRequest } = require("../middlewares/auth-request");
const {
    signup,
    signout,
    signin,
    getAllUsers,
    signupValidator,
    getUserInfo,
} = require("../controllers/auth");

const route = express.Router();

// "/api/user"
route.get("/", (req, res) => {
    res.status(200).json({
        "msg": "okay",
    });
});

route.get("/signout", signout);
route.post("/signin", signin);
route.post("/create", signupValidator, signup);
route.get("/:id", authRequest(permissions.MUST_BE_SIGNED_IN), getUserInfo);
route.get("/all", authRequest(permissions.ADMIN), getAllUsers);

module.exports = route;
