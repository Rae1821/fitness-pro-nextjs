import { connectToDB } from "@/utils/database";
import Workout from "@/models/workout";

export const GET = async (request) => {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");

  if (!userId || !startDate || !endDate) {
    return new Response("Missing required parameters", { status: 400 });
  }

  try {
    await connectToDB();

    const workouts = await Workout.find({
      creator: userId,
      date: {
        $gte: new Date(startDate),
        $lte: new Date(endDate),
      },
    })
      .populate("creator")
      .sort({ date: 1 });

    return new Response(JSON.stringify(workouts), { status: 200 });
  } catch (error) {
    console.error("Error fetching calendar workouts:", error);
    return new Response("Failed to fetch calendar workouts", { status: 500 });
  }
};
