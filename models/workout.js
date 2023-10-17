import { Schema, model, models } from 'mongoose';

const WorkoutSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    focus: {
        type: String,
        required: [true, 'Workout Focus is required'],
    },
    exercise: {
        type: String,
        required: [true, 'Exercise is required.'],
    },
    sets: {
        type: Number,
        required: [true, 'Sets is required.'],
    },
    reps: {
        type: Number,
        required: [true, 'Reps is required.'],
    },
    weight: {
        type: Number,
        required: [true, 'Weight is required.'],
    }
});

const Workout = models.Workout || model('Workout', WorkoutSchema);

export default Workout;