const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    // name: {
    //     type: String,
    //     required: true,
    // },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: "USER",
    },
    packages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Package",
        },
    ],
});

module.exports = mongoose.model("User", userSchema);
