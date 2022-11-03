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
    // roleType: {
    //     type: String,
    //     required: true,
    //     default: "USER",
    // },
});

module.exports = mongoose.model("User", userSchema);
