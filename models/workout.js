import { Schema, model, models } from 'mongoose';

const ExerciseSchema = new Schema({
    exercise: {
        type: String,
        required: [false, "Exercise is required"],
    },
    sets: {
        type: Number,
        required: [false, "Set is required"],
    },
    reps: {
        type: Number,
        required: [false, "Reps are required"],
    },
    weight1: {
        type: Number,
        required: [false, "Weight is required"],
    },
    weight2: {
        type: Number,
        required: [false, "Weight is required"],
    },
    weight3: {
        type: Number,
        required: [false, "Weight is required"],
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
    speed: {
        type: String,
        required: [false, "Speed is not required"],
    },
    incline: {
        type: String,
        required: [false, "Incline is not required"],
    },
    duration: {
        type: Number,
        required: [true, "Duration is required"],
    },
    exerciseObj: [ExerciseSchema], //Define exercises as an array of exercise schema
});

const Workout = models.Workout || model('Workout', WorkoutSchema);

export default Workout;

