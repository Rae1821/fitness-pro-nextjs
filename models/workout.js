import { Schema, model, models } from 'mongoose';

const WorkoutSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    tag: {
        type: String,
        required: [false, "Tag is optional"],
    },
    exercise: {
        type: String,
        required: [false, "Exercise is optional"],
    }
    // exerciseRow: [
    //     {
    //         tag: {
    //             type: String,
    //             required: [true, "Tag is required"],
    //         },
    //         exercise: {
    //             type: String,
    //             required: [true, 'Exercise is required.'],
    //         },
    //         sets: {
    //             type: Number,
    //             required: [true, 'Sets is required.'],
    //         },
    //         reps: {
    //             type: Number,
    //             required: [true, 'Reps is required.'],
    //         },
    //         weight1: {
    //             type: Number,
    //             required: [true, 'Weight is required.'],
    //         },
    //         weight2: {
    //             type: Number,
    //             required: [true, 'Weight is required.'],
    //         },
    //         weight3: {
    //             type: Number,
    //             required: [true, 'Weight is required.'],
    //         },
    //     }
    // ]

});

const Workout = models.Workout || model('Workout', WorkoutSchema);

export default Workout;


// focus: {
//     type: String,
//     required: [true, 'Workout Focus is required'],
// },
// date: {
//     type: String,
//     required: [true, "Date is required"],
// },
// duration: {
//     type: Number,
//     required: [true, "Duration is required"],
// },