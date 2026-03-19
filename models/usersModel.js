const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
        minlength: 8,
        match: [
            /^(?=.*[0-9])(?=.*[!@#$%^&*])/,
            "Password must contain at least 1 number and 1 special character"
        ]
    }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
