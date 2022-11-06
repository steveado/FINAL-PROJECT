const { body, validationResult } = require("express-validator");
const User = require("../models/user");
const { hashPassword, comparePasswords } = require("../helpers/passwords");
const RequestValidationError = require("../errors/request-validation-error");
const ExistingUser = require("../errors/existing-user");
const SignInError = require("../errors/sign-in-error");
const NotExistingError = require("../errors/not-exist-error");

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
    const { email, password, role } = req.body;

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

    if (role !== undefined) {
        newUser.role = role;
    }

    const user = await newUser.save();

    //store user's role and id in cookie
    req.session.userId = user._id;
    req.session.role = user.role;

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

    //verify password
    const validPassword = await comparePasswords(user.password, password);
    if (!validPassword) {
        next(new SignInError());
    }

    //store user info in session
    req.session.userId = user._id;
    req.session.role = user.role;

    res.status(401).json({
        user: user,
        status: true,
    });
};

//add db error
const getAllUsers = async (req, res) => {
    const users = await User.find();
    console.log("cookies: ", req.session);
    res.status(200).json(users);
};

const getUserInfo = async (req, res, next) => {
    const userId = req.params.id;

    const userProfile = await User.findOne({ _id: userId });

    if (!userProfile) {
        next(new NotExistingError("This user doesn't exist"));
    }
    const case1 = userProfile._id === req.session.id;
    const case2 = req.session.role === "ADMIN";

    if (case1 || case2) res.status(200).json(userProfile);
};

module.exports = {
    signup,
    signout,
    signin,
    signupValidator,
    getAllUsers,
    getUserInfo,
};
