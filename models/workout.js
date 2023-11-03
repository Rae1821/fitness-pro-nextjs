import { Schema, model, models } from 'mongoose';

const ExerciseSchema = new Schema({
    exercise: {
        type: String,
        required: [true, "Exercise is required"],
    },
    tag: {
        type: String,
        required: [true, "Tag is required"],
    },
    sets: {
        type: Number,
        required: [true, "Set is required"],
    },
    reps: {
        type: Number,
        required: [true, "Reps are required"],
    },
    weight1: {
        type: Number,
        required: [true, "Weight is required"],
    },
    weight2: {
        type: Number,
        required: [true, "Weight is required"],
    },
    weight3: {
        type: Number,
        required: [true, "Weight is required"],
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
        required: [true, "Workout name is required"],
    },
    duration: {
        type: Number,
        required: [true, "Duration is required"],
    },
    exerciseObj: [ExerciseSchema], //Define exercises as an array of exercise schema
});

const Workout = models.Workout || model('Workout', WorkoutSchema);

export default Workout;

