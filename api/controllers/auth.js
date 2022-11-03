const mongoose = require("mongoose");
const { body, validationResult } = require("express-validator");
const User = require("../models/user");
const { hashPassword, comparePasswords } = require("../helpers/passwords");
const RequestValidationError = require("../errors/request-validation-error");
const ExistingUser = require("../errors/existing-user");
const SignInError = require("../errors/sign-in-error");

//validators
const signupValidator = [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
        .trim()
        .isLength({ min: 4, max: 20 })
        .withMessage("Password must be between 4 and 20 characters"),
];

const signup = async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        next(new RequestValidationError(errors.array()));
    }
    const { email, password } = req.body;

    const exisitingUser = await User.findOne({ email: email });

    if (exisitingUser) {
        // return res.status(400).json("User already exists");
        next(new ExistingUser());
    }

    const newPass = await hashPassword(password);
    const newUser = new User({
        email: email,
        password: newPass,
    });

    const user = await newUser.save();

    //store user's role and id in cookie
    req.session.userId = user._id;

    console.log("req session: ", req.session);
    res.status(200).json({
        user: user,
        status: true,
    });
};

//check if signed in
const signout = (req, res) => {
    req.session = null;
    res.status(200).json("Logged out");
};

const signin = async (req, res, next) => {
    const { email, password } = req.body;

    //verify email
    const user = await User.findOne({ email: email });
    if (!user) {
        next(new SignInError());
    }

    //verify pass
    const validPassword = await comparePasswords(user.password, password);
    if (!validPassword) {
        next(new SignInError());
    }

    req.session.userId = user._id;

    res.status(401).json({
        user: user,
        status: true,
    });
};

module.exports = { signup, signout, signin, signupValidator };
