"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
    <div>
      <div className='mx-auto my-6 max-w-[800px] rounded-lg border p-4'>
        <h3 className='mb-3 font-semibold'>
          🏋️ Today&apos;s Planned Workouts ({todaysWorkouts.length})
        </h3>
        <div className='space-y-3'>
          {todaysWorkouts.map((workout) => (
            <div
              key={workout._id}
              className='flex items-center justify-between rounded bg-gray-100 p-3 shadow-sm'
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
                <Button
                  onClick={() => markAsCompleted(workout._id)}
                  className='bg-teal-500 hover:bg-teal-600'
                  size='sm'
                >
                  Complete
                </Button>
                <Button asChild variant='outline' size='sm'>
                  <Link href={`/edit-workout?id=${workout._id}`}>Edit</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className='mt-4 text-center'>
          <Button asChild variant='link' size='sm'>
            <Link href='/calendar'>View Full Calendar</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TodaysWorkouts;
