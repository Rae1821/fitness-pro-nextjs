import { connectToDB } from '@utils/database';
import Workout from '@models/workout';

export const GET = async (request, { params }) => {
    try {
        await connectToDB();

        const workout = await Workout.findById(params.id).populate('creator');

        if(!workout) return new Response("workout not found", { status: 404 });

        return new Response(JSON.stringify(workout), { status: 200 })

    } catch(error) {
        return new Response("Failed to fetch all workouts", { status: 500 })
    }
}

export const PATCH = async (request, { params }) => {
    const { selectedDate, workoutName, workoutFocus, tag, instructor, time, intervals, speedHigh, speedLow, incline, duration, exerciseObj } = await request.json();

    try {
        await connectToDB();

        //find the existing workout by id
        const existingWorkout = await Workout.findById(params.id);

        if(!existingWorkout) {
            return new Response("Workout not found", { status: 404 });
        }

        //update the workout with new data
        existingWorkout.date = selectedDate;
        existingWorkout.workoutName = workoutName;
        existingWorkout.workoutFocus = workoutFocus;
        existingWorkout.tag = tag;
        existingWorkout.instructor = instructor;
        existingWorkout.time = time;
        existingWorkout.intervals = intervals;
        existingWorkout.speedHigh = speedHigh;
        existingWorkout.speedLow = speedLow;
        existingWorkout.incline = incline;
        existingWorkout.duration = duration;
        existingWorkout.exerciseObj = exerciseObj;


        await existingWorkout.save();

        return new Response("Successfully updated workout", { status: 200 });


    } catch(error) {
        return new Response("Failed to update workout", { status: 500 });
    }
}

export const DELETE = async (request, { params }) => {

    try {
        await connectToDB();

        //find the workout by id and remove it
        await Workout.findByIdAndRemove(params.id);

        return new Response("Workout deleted", { status: 200 });

    } catch(error) {
        return new Response("Failed to delete workout", { status: 500 })
    }

}