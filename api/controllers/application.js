const Application = require("../models/application");
const User = require("../models/user");

const createApplication = async (req, res, next) => {
    const { userId } = req.session;

    const newApplicatiion = new Application({ createdBy: userId });

    try {
        const application = await newApplicatiion.save();
        res.status(200).json(application);
    } catch (error) {
        next(error);
    }
};

const getApplications = async (req, res) => {
    const applications = await Application.find();

    res.status(200).json(applications);
};

const confirmApplication = async (req, res) => {
    const { applicationId } = req.params;
    const { userId } = req.session;

    //get application
    //change the application fulfilled to true
    //change the application fulfilled by to the admin id
    //change the fulfilled time to current time
    const application = await Application.findOneAndUpdate(
        { _id: applicationId },
        { fulfilled: true, fulfilledBy: userId, fulfilledTime: Date.now() },
        { new: true }
    );

    //change the role of the user in the application to "COURIER"
    const applier = await User.findOneAndUpdate(
        { _id: application.createdBy },
        { role: "COURIER" },
        { new: true }
    );

    res.status(200).json({
        updatedUser: applier,
        updatedApplciations: application,
    });
};

module.exports = { createApplication, getApplications, confirmApplication };
