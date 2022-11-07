const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const productSchema = mongoose.Schema({
    createdBy: String,
    pickupPoint: {
        type: String,
        required: true,
    },
    destination: {
        type: String,
        required: true,
    },
    weight: {
        type: Number,
    },
    description: {
        type: String,
    },
    delivered: {
        type: Boolean,
        default: false,
    },
    timePosted: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model("Package", productSchema);
