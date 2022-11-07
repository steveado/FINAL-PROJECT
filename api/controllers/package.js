const NotExistingError = require("../errors/not-exist-error");
const UnauthorizedError = require("../errors/unauthorized-error");

const Package = require("../models/package");

const createPackage = async (req, res) => {
    const { pickupPoint, destination, weight, description } = req.body;
    const newPackage = new Package({
        pickupPoint,
        destination,
        weight,
        description,
    });
    const package = await newPackage.save();
    res.status(200).json(package);
};

const getAllPackages = async (req, res) => {
    const packages = await Package.find();

    res.status(200).json(packages);
};

const getPackageInfo = async (req, res, next) => {
    const packageId = req.params.id;
    const package = await Package.findOne({ _id: packageId });

    if (!package) {
        next(new NotExistingError("This package doesn't exist"));
    }

    // use this to throw an error if user signed in isnt the user that created the package, but first add postedBy field to the package model
    // if (req.session.role === "USER" && req.session.id !== package.posted_by) {
    //     next(new UnauthorizedError());
    // }

    // const case1 = package._id === req.session.id;
    // const case2 = req.session.role === "ADMIN";

    // if (case1 || case2) res.status(200).json(package);

    res.status(200).json(package);
};

module.exports = { createPackage, getAllPackages, getPackageInfo };
