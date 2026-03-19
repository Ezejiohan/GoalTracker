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
            /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/,
            "Password must be at least 8 characters long and include at least one number and one special character"
        ]
    }
}, { timestamps: true })

module.exports = mongoose.model("User", userSchema)
