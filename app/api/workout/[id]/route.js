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
    const { name, date, duration, tag, exercise, sets, reps, weight1, weight2, weight3 } = await request.json();

    try {
        await connectToDB();

        //find the existing workout by id
        const existingWorkout = await Workout.findById(params.id);

        if(!existingWorkout) {
            return new Response("Workout not found", { status: 404 });
        }

        //update the workout with new data
        existingWorkout.name = name;
        existingWorkout.date = date;
        existingWorkout.duration = duration;
        existingWorkout.tag = tag;
        existingWorkout.exercise = exercise;
        existingWorkout.sets = sets;
        existingWorkout.reps = reps;
        existingWorkout.weight1 = weight1;
        existingWorkout.weight2 = weight2;
        existingWorkout.weight3 = weight3;

        await existingWorkout.save();

        return new Response("Successfully updated workout", { status: 200 });

        // return new Response(JSON.stringify(existingWorkout), { status: 200 });

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