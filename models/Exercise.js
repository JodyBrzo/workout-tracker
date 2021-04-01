const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: "Select Exercise Type"
  },
  name: {
    type: String,
    trim: true,
    required: "Exercise Name"
  },
  distance: Number,
  duration: Number,
  weight: Number,
  reps: Number,
  sets: Number
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;