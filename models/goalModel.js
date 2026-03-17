const mongoose = require("mongoose")

const goalSchema = new mongoose.Schema({

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  title: {
    type: String,
    required: true
  },

  progress: {
    type: Number,
    default: 0
  },

  deadline: {
    type: Date
  },

  streak: {
    type: Number,
    default: 0
  },

  completed: {
    type: Boolean,
    default: false
  }

}, { timestamps: true })

module.exports = mongoose.model("Goal", goalSchema)
