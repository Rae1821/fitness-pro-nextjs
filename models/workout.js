import { Schema, model, models } from 'mongoose';

const ExerciseSchema = new Schema({
    exercise: {
        type: String,
        required: [false, "Exercise is not required"],
    },
    sets: {
        type: Number,
        required: [false, "Set is not required"],
    },
    weight: {
        type: Number,
        required: [false, "Weight is not required"],
    },
    rep1: {
        type: Number,
        required: [false, "Rep is not required"],
    },
    rep2: {
        type: Number,
        required: [false, "Rep is not required"],
    },
    rep3: {
        type: Number,
        required: [false, "Rep is not required"],
    }
})

const WorkoutSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    date: {
        type: Date,
        required: [true, "Date is required"],
    },
    workoutName: {
        type: String,
        required: [false, "Workout name is not required"],
    },
    workoutFocus: {
        type: String,
        required: [false, "Workout focus is not required"],
    },
    tag: {
        type: String,
        required: [false, "Tag is required"],
    },
    instructor: {
        type: String,
        required: [false, "Instructor is not required"],
    },
    time: {
        type: String,
        required: [false, "Time is not required"],
    },
    intervals: {
        type: Number,
        required: [false, "Intervals is not required"],
    },
    speedHigh: {
        type: Number,
        required: [false, "SpeedHigh is not required"],
    },
    speedLow: {
        type: Number,
        required: [false, "SpeedLow is not required"],
    },
    distance: {
        type: Number,
        required: [false, "Distance is not required"],
    },
    duration: {
        type: Number,
        required: [true, "Duration is required"],
    },
    incline: {
        type: Number,
        required: [false, "Incline is not required"],
    },
    exerciseObj: [ExerciseSchema], //Define exercises as an array of exercise schema
});

const Workout = models.Workout || model('Workout', WorkoutSchema);

export default Workout;

