import { connectToDB } from "@utils/database";
import Workout from "@models/workout";

export const POST = async (req) => {
  const {
    userId,
    date,
    status = "completed",
    scheduledTime,
    workoutName,
    workoutFocus,
    tag,
    instructor,
    time,
    intervals,
    speedHigh,
    speedLow,
    incline,
    duration,
    distance,
    exerciseObj,
  } = await req.json();

  try {
    await connectToDB();

    // Create a new workout document
    const newWorkout = new Workout({
      creator: userId,
      date,
      status,
      scheduledTime,
      workoutName,
      workoutFocus,
      tag,
      instructor,
      time,
      intervals,
      speedHigh,
      speedLow,
      incline,
      duration,
      distance,
      exerciseObj: exerciseObj.map((exercise) => ({
        exercise: exercise.exercise,
        sets: exercise.sets,
        weight: exercise.weight,
        rep1: exercise.rep1,
        rep2: exercise.rep2,
        rep3: exercise.rep3,
      })),
    });

    // Save the new workout
    await newWorkout.save();

    return new Response(JSON.stringify(newWorkout), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new workout", { status: 500 });
  }
};
