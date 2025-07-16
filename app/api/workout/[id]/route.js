import { connectToDB } from "@utils/database";
import Workout from "@models/workout";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const workout = await Workout.findById(params.id).populate("creator");

    if (!workout) return new Response("workout not found", { status: 404 });

    return new Response(JSON.stringify(workout), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all workouts", { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  const {
    date,
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
    status,
    scheduledTime,
  } = await request.json();

  try {
    await connectToDB();

    // find the existing workout by id
    const existingWorkout = await Workout.findById(params.id);

    if (!existingWorkout) {
      return new Response("Workout not found", { status: 404 });
    }

    // update the workout with new data (only if provided)
    if (date !== undefined) existingWorkout.date = date;
    if (workoutName !== undefined) existingWorkout.workoutName = workoutName;
    if (workoutFocus !== undefined) existingWorkout.workoutFocus = workoutFocus;
    if (tag !== undefined) existingWorkout.tag = tag;
    if (instructor !== undefined) existingWorkout.instructor = instructor;
    if (time !== undefined) existingWorkout.time = time;
    if (intervals !== undefined) existingWorkout.intervals = intervals;
    if (speedHigh !== undefined) existingWorkout.speedHigh = speedHigh;
    if (speedLow !== undefined) existingWorkout.speedLow = speedLow;
    if (incline !== undefined) existingWorkout.incline = incline;
    if (duration !== undefined) existingWorkout.duration = duration;
    if (distance !== undefined) existingWorkout.distance = distance;
    if (exerciseObj !== undefined) existingWorkout.exerciseObj = exerciseObj;
    if (status !== undefined) existingWorkout.status = status;
    if (scheduledTime !== undefined)
      existingWorkout.scheduledTime = scheduledTime;

    await existingWorkout.save();

    return new Response("Successfully updated workout", { status: 200 });
  } catch (error) {
    return new Response("Failed to update workout", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();

    // find the workout by id and remove it
    await Workout.findByIdAndRemove(params.id);

    return new Response("Workout deleted", { status: 200 });
  } catch (error) {
    return new Response("Failed to delete workout", { status: 500 });
  }
};
