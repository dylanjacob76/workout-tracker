const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: {
        type: String,
        required: "Enter the type of exercise"
      },
      name: {
        type: String,
        required: "Enter the exercise name"
      },
      distance: {
        type: Number,
        required: "Enter the distance"
      },
      weight: {
        type: Number,
        required: "Enter the weight"
      },
      sets: {
        type: Number,
        required: "Enter the total number of sets"
      },
      reps: {
        type: Number,
        required: "Enter the total number of reps"
      },
      duration: {
        type: Number,
        required: "Enter the total duration"
      },
    }
  ]
})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;

// date: "Date",
// totalDuration: "Total Workout Duration",
// numExercises: "Exercises Performed",
// totalWeight: "Total Weight Lifted",
// totalSets: "Total Sets Performed",
// totalReps: "Total Reps Performed",
// totalDistance: "Total Distance Covered"