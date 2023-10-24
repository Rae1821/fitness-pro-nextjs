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
    const { tag, exercise } = await request.json();


    try {
        await connectToDB();

        //find the existing workout by id
        const existingWorkout = await Workout.findById(params.id);

        if(!existingWorkout) return new Response("Workout not found", { status: 404 });

        //update the workout with new data
        existingWorkout.tag = tag;
        existingWorkout.exercise = exercise;

        await existingWorkout.save();

        return new Response(JSON.stringify(existingWorkout), { status: 200 });

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