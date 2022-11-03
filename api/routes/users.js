const express = require("express");
const { body, validationResult } = require("express-validator");
const {
    signup,
    signout,
    signin,
    signupValidator,
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

module.exports = route;
