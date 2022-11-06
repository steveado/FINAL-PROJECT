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
    console.log(req.session);
    const packages = await Package.find();

    res.status(200).json(packages);
};

module.exports = { createPackage, getAllPackages };
