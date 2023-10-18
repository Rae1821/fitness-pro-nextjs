import { connectToDB } from '@utils/database';
import Workout from '@models/workout';

export const POST = async (req) => {
    const { userId, exerciseRow } = await req.json()

    try {
        await connectToDB();
        const newWorkout = new Workout({
            creator: userId,
            exerciseRow: exerciseRow.map((exer) => {
                return {
                    tag: exer.tag,
                    exercise: exer.exercise,
                    sets: exer.sets,
                    reps: exer.reps,
                    weight1: exer.weight1,
                    weight2: exer.weight2,
                    weight3: exer.weight3,
                }

        }),
        });

        await newWorkout.save();

        return new Response(JSON.stringify(newWorkout), { status: 201 })

    } catch (error) {
        return new Response("Failed to create a new workout", { status: 500 } )
    }
}

