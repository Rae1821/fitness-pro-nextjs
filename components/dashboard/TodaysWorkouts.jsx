"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";

const TodaysWorkouts = () => {
  const { data: session } = useSession();
  const [todaysWorkouts, setTodaysWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTodaysWorkouts = async () => {
      if (!session?.user?.id) return;

      try {
        const today = new Date();
        const startOfDay = new Date(
          today.getFullYear(),
          today.getMonth(),
          today.getDate()
        );
        const endOfDay = new Date(
          today.getFullYear(),
          today.getMonth(),
          today.getDate() + 1
        );

        const response = await fetch(
          `/api/workout/calendar?userId=${session.user.id}&startDate=${startOfDay.toISOString()}&endDate=${endOfDay.toISOString()}`
        );
        const data = await response.json();

        const planned = data.filter((workout) => workout.status === "planned");
        setTodaysWorkouts(planned);
      } catch (error) {
        console.error("Error fetching today's workouts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTodaysWorkouts();
  }, [session?.user?.id]);

  const markAsCompleted = async (workoutId) => {
    try {
      const response = await fetch(`/api/workout/${workoutId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "completed" }),
      });

      if (response.ok) {
        setTodaysWorkouts((prev) => prev.filter((w) => w._id !== workoutId));
      }
    } catch (error) {
      console.error("Error updating workout:", error);
    }
  };

  if (loading) return null;
  if (todaysWorkouts.length === 0) return null;

  return (
    <div data-theme='night'>
      <div className='mx-auto my-6 max-w-[800px] rounded-lg border border-slate-600 p-4'>
        <h3 className='mb-3 font-semibold'>
          🏋️ Today&apos;s Planned Workouts ({todaysWorkouts.length})
        </h3>
        <div className='space-y-3'>
          {todaysWorkouts.map((workout) => (
            <div
              key={workout._id}
              className='flex items-center justify-between rounded bg-slate-800 p-3 shadow-sm'
            >
              <div>
                <h4 className='font-medium'>
                  {workout.workoutName || workout.tag}
                </h4>
                <p className='text-sm text-gray-600'>
                  {workout.duration} minutes
                  {workout.scheduledTime && ` • ${workout.scheduledTime}`}
                </p>
              </div>
              <div className='flex gap-2'>
                <button
                  onClick={() => markAsCompleted(workout._id)}
                  className='btn btn-success btn-sm'
                >
                  Complete
                </button>
                <Link
                  href={`/edit-workout?id=${workout._id}`}
                  className='btn btn-outline btn-sm'
                >
                  Edit
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className='mt-4 text-center'>
          <Link href='/calendar' className='btn btn-link btn-sm'>
            View Full Calendar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TodaysWorkouts;
