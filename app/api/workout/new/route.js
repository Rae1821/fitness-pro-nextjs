import { connectToDB } from '@utils/database';
import Workout from '@models/workout';

export const POST = async (req) => {
    const { userId, focus, exercise, sets, reps, weight } = await req.json()

    try {
        await connectToDB();
        const newWorkout = new Workout({
            creator: userId,
            focus,
            exercise,
            sets,
            reps,
            weight
        });

        await newWorkout.save();

        return new Response(JSON.stringify(newWorkout), { status: 201 })

    } catch (error) {
        return new Response("Failed to create a new workout", { status: 500 } )
    }
}

