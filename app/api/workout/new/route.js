import { connectToDB } from '@utils/database';
import Workout from '@models/workout';

export const POST = async (req) => {

    const { userId, date, workoutName, workoutFocus, tag, instructor, time, speed, incline,duration, exerciseObj } = await req.json();

    try {
        await connectToDB();

        //Create a new workout document
        const newWorkout = new Workout({
            creator: userId,
            date: date,
            workoutName: workoutName,
            workoutFocus: workoutFocus,
            tag: tag,
            instructor: instructor,
            time: time,
            speed: speed,
            incline: incline,
            duration: duration,
            exerciseObj: exerciseObj.map((exercise) => ({
                exercise: exercise.exercise,
                sets: exercise.sets,
                reps: exercise.reps,
                weight1: exercise.weight1,
                weight2: exercise.weight2,
                weight3: exercise.weight3
            }))
        });

        //Save the new workout
        await newWorkout.save();

        return new Response(JSON.stringify(newWorkout), { status: 201 })

    } catch (error) {
        return new Response("Failed to create a new workout", { status: 500 } )
    }
}

