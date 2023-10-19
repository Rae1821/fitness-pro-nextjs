import { connectToDB } from '@utils/database';
import Workout from '@models/workout';

export const GET = async (request, { params }) => {

    try {
        await connectToDB();


        const workouts = await Workout.find({
            creator: params.id
        }).populate('creator');

        return new Response(JSON.stringify(workouts, { status: 200 }))
    } catch(error) {
        return new Response("Failed to fetch all workouts", { status: 500 })
    }

}