const mongoose = require("mongoose");
const Exercise = require("./Exercise");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  // exercises: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "Exercise"
  //   }
  // ]
  exercises: {
      type: [Exercise.ExerciseSchema]
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;