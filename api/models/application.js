const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const applicationSchema = mongoose.Schema({
    createdBy: String,
    fulfilled: {
        type: Boolean,
        default: false,
    },
    timePosted: {
        type: Date,
        default: Date.now(),
    },
    fulfilledBy: {
        type: String,
        default: "",
    },
    fulfilledtime: {
        type: Date,
        default: undefined,
    },
});

module.exports = mongoose.model("Application", applicationSchema);
