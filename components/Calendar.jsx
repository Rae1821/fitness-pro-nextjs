"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Clock,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Calendar = () => {
  const { data: session } = useSession();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [workouts, setWorkouts] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [todaysWorkouts, setTodaysWorkouts] = useState([]);

  // Get first day of month and number of days
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const lastDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );
  const firstDayOfWeek = firstDayOfMonth.getDay();
  const daysInMonth = lastDayOfMonth.getDate();

  // Month names
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Fetch workouts for the current month
  useEffect(() => {
    const fetchWorkouts = async () => {
      if (!session?.user?.id) return;

      const startDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1
      );
      const endDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
      );

      try {
        const response = await fetch(
          `/api/workout/calendar?userId=${session.user.id}&startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}`
        );
        const data = await response.json();
        setWorkouts(data);
      } catch (error) {
        console.error("Error fetching workouts:", error);
      }
    };

    fetchWorkouts();
  }, [currentDate, session?.user?.id]);

  // Check for today's workouts for notifications
  useEffect(() => {
    const today = new Date();
    const todayString = today.toDateString();
    const todaysScheduled = workouts.filter((workout) => {
      const workoutDate = new Date(workout.date);
      return (
        workoutDate.toDateString() === todayString &&
        workout.status === "planned"
      );
    });
    setTodaysWorkouts(todaysScheduled);
  }, [workouts]);

  // Navigate months
  const navigateMonth = (direction) => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + direction);
      return newDate;
    });
  };

  // Get workouts for a specific date
  const getWorkoutsForDate = (date) => {
    const dateString = date.toDateString();
    return workouts.filter((workout) => {
      const workoutDate = new Date(workout.date);
      return workoutDate.toDateString() === dateString;
    });
  };

  // Mark workout as completed
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
        // Refresh workouts
        setWorkouts((prev) =>
          prev.map((w) =>
            w._id === workoutId ? { ...w, status: "completed" } : w
          )
        );
      }
    } catch (error) {
      console.error("Error updating workout:", error);
    }
  };

  // Generate calendar days
  const generateCalendarDays = () => {
    const days = [];

    // Empty cells for days before month starts
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push(
        <div key={`empty-${i}`} className='h-24 border border-gray-200'></div>
      );
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        day
      );
      const dayWorkouts = getWorkoutsForDate(date);
      const isToday = date.toDateString() === new Date().toDateString();
      const isSelected =
        selectedDate && date.toDateString() === selectedDate.toDateString();

      days.push(
        <div
          key={day}
          className={`h-24 cursor-pointer border border-gray-200 p-1 hover:bg-gray-50 ${
            isToday ? "border-blue-300 bg-blue-50" : ""
          } ${isSelected ? "bg-blue-100" : ""}`}
          onClick={() => setSelectedDate(date)}
        >
          <div
            className={`text-sm font-medium ${isToday ? "text-blue-600" : ""}`}
          >
            {day}
          </div>
          <div className='mt-1 space-y-1'>
            {dayWorkouts.slice(0, 2).map((workout, index) => (
              <div
                key={index}
                className={`truncate rounded p-1 text-xs ${
                  workout.status === "planned"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-green-100 text-green-800"
                }`}
                title={`${workout.workoutName || workout.tag} - ${workout.status}`}
              >
                {workout.status === "planned" && (
                  <Clock className='mr-1 inline size-3' />
                )}
                {workout.status === "completed" && (
                  <CheckCircle className='mr-1 inline size-3' />
                )}
                {workout.workoutName || workout.tag}
              </div>
            ))}
            {dayWorkouts.length > 2 && (
              <div className='text-xs text-gray-500'>
                +{dayWorkouts.length - 2} more
              </div>
            )}
          </div>
        </div>
      );
    }

    return days;
  };

  return (
    <div className='mx-auto max-w-6xl p-4'>
      {/* Today's Workouts Notification */}
      {todaysWorkouts.length > 0 && (
        <div className='mb-6 rounded-lg border border-teal-300 bg-teal-100 p-4'>
          <h3 className='mb-2 font-semibold text-teal-800'>
            🏋️ Today&apos;s Scheduled Workouts ({todaysWorkouts.length})
          </h3>
          <div className='space-y-2'>
            {todaysWorkouts.map((workout) => (
              <div
                key={workout._id}
                className='flex items-center justify-between rounded bg-white p-2'
              >
                <div>
                  <span className='font-medium'>
                    {workout.workoutName || workout.tag}
                  </span>
                  {workout.scheduledTime && (
                    <span className='ml-2 text-sm text-gray-600'>
                      at {workout.scheduledTime}
                    </span>
                  )}
                </div>
                <Button
                  onClick={() => markAsCompleted(workout._id)}
                  size='sm'
                  className='bg-teal-500 hover:bg-teal-700'
                >
                  Mark Complete
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Calendar Header */}
      <div className='mb-6 flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <h1 className='text-3xl font-bold'>
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h1>
          <div className='flex gap-2'>
            <Button
              onClick={() => navigateMonth(-1)}
              variant='outline'
              size='sm'
              className='size-8 p-0'
            >
              <ChevronLeft className='size-4' />
            </Button>
            <Button
              onClick={() => navigateMonth(1)}
              variant='outline'
              size='sm'
              className='size-8 p-0'
            >
              <ChevronRight className='size-4' />
            </Button>
          </div>
        </div>
        <Button asChild>
          <Link href='/plan-workout'>
            <Plus className='mr-2 size-4' />
            Plan Workout
          </Link>
        </Button>
      </div>

      {/* Calendar Grid */}
      <div className='overflow-hidden rounded-lg bg-white shadow-lg'>
        {/* Day headers */}
        <div className='grid grid-cols-7 bg-gray-50'>
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div
              key={day}
              className='border-b border-gray-200 p-3 text-center font-medium text-gray-700'
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar days */}
        <div className='grid grid-cols-7'>{generateCalendarDays()}</div>
      </div>

      {/* Selected Date Details */}
      {selectedDate && (
        <div className='mt-6 rounded-lg bg-white p-4 shadow-lg'>
          <h3 className='mb-3 text-lg font-semibold'>
            Workouts for {selectedDate.toLocaleDateString()}
          </h3>
          {getWorkoutsForDate(selectedDate).length === 0 ? (
            <div className='py-4 text-center text-gray-500'>
              No workouts scheduled for this date
              <div className='mt-2'>
                <Button asChild size='sm'>
                  <Link
                    href={`/plan-workout?date=${selectedDate.toISOString().split("T")[0]}`}
                  >
                    Plan a Workout
                  </Link>
                </Button>
              </div>
            </div>
          ) : (
            <div className='space-y-3'>
              {getWorkoutsForDate(selectedDate).map((workout) => (
                <div
                  key={workout._id}
                  className={`rounded-lg border p-3 ${
                    workout.status === "planned"
                      ? "border-yellow-300 bg-yellow-50"
                      : "border-green-300 bg-green-50"
                  }`}
                >
                  <div className='flex items-center justify-between'>
                    <div>
                      <h4 className='font-medium'>
                        {workout.workoutName || workout.tag}
                      </h4>
                      <p className='text-sm text-gray-600'>
                        Duration: {workout.duration} minutes
                        {workout.scheduledTime &&
                          ` • Scheduled: ${workout.scheduledTime}`}
                      </p>
                      <span
                        className={`mt-1 inline-block rounded-full px-2 py-1 text-xs ${
                          workout.status === "planned"
                            ? "bg-yellow-200 text-yellow-800"
                            : "bg-green-200 text-green-800"
                        }`}
                      >
                        {workout.status === "planned" ? "Planned" : "Completed"}
                      </span>
                    </div>
                    {workout.status === "planned" && (
                      <div className='flex gap-2'>
                        <Button
                          onClick={() => markAsCompleted(workout._id)}
                          size='sm'
                          className='bg-green-600 hover:bg-green-700'
                        >
                          Complete
                        </Button>
                        <Button asChild variant='outline' size='sm'>
                          <Link href={`/edit-workout?id=${workout._id}`}>
                            Edit
                          </Link>
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Calendar;
