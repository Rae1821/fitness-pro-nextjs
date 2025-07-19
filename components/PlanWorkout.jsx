"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

import AppForm from "./appWorkout/AppForm";
import WorkoutForm from "@/components/strength/WorkoutForm";
import ClassForm from "@/components/class/ClassForm";
import CardioForm from "@/components/cardio/CardioForm";
import HighIntensityForm from "@/components/hiit/HighIntensityForm";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PlanWorkout = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const searchParams = useSearchParams();

  const [submitting, setSubmitting] = useState(false);

  // Initialize date from URL parameter or default to tomorrow
  const [date, setDate] = useState(() => {
    const urlDate = searchParams.get("date");
    if (urlDate) {
      return new Date(urlDate);
    }
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow;
  });

  const [scheduledTime, setScheduledTime] = useState("");

  const [post, setPost] = useState({
    workoutName: "",
    workoutFocus: "",
    tag: "",
    instructor: "",
    time: "",
    intervals: 0,
    speedHigh: 0,
    speedLow: 0,
    distance: 0,
    duration: 0,
    incline: 0,
    exerciseObj: [
      {
        exercise: "",
        sets: 0,
        weight: 0,
        rep1: 0,
        rep2: 0,
        rep3: 0,
      },
    ],
  });

  const handleClick = (e) => {
    e.preventDefault();
    setDate(date);
    setPost({
      ...post,
      exerciseObj: [
        ...post.exerciseObj,
        {
          exercise: "",
          sets: 0,
          weight: 0,
          rep1: 0,
          rep2: 0,
          rep3: 0,
        },
      ],
    });
  };

  const createPlannedWorkout = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("/api/workout/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: session?.user.id,
          date,
          status: "planned",
          scheduledTime,
          workoutName: post.workoutName,
          workoutFocus: post.workoutFocus,
          tag: post.tag.toLowerCase(),
          instructor: post.instructor,
          time: post.time,
          intervals: post.intervals,
          speedHigh: post.speedHigh,
          speedLow: post.speedLow,
          distance: post.distance,
          duration: post.duration,
          incline: post.incline,
          exerciseObj: post.exerciseObj,
        }),
      });
      if (response.ok) {
        router.push("/calendar");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className='min-h-screen w-full'>
      <div className=''>
        <h2 className='mb-4 mt-10 text-center'>Choose your workout type</h2>
        <div className='mx-auto w-full max-w-xs space-y-2'>
          <Select
            value={post.tag}
            onValueChange={(value) => setPost({ ...post, tag: value })}
          >
            <SelectTrigger className='w-full'>
              <SelectValue placeholder='Pick one' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='App'>App</SelectItem>
              <SelectItem value='Cardio'>Cardio</SelectItem>
              <SelectItem value='Strength'>Strength</SelectItem>
              <SelectItem value='Class'>Class</SelectItem>
              <SelectItem value='HIIT'>HIIT</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Scheduled Time Input */}
      <div className='mx-auto mt-6 w-full max-w-xs space-y-2'>
        <Label htmlFor='scheduled-time' className='font-semibold'>
          Scheduled Time (Optional)
        </Label>
        <Input
          id='scheduled-time'
          type='time'
          value={scheduledTime}
          onChange={(e) => setScheduledTime(e.target.value)}
          className='w-full'
          placeholder='Select time for workout'
        />
        <p className='text-sm text-gray-500'>
          Set a specific time to get reminded about your workout
        </p>
      </div>

      {post.tag === "Strength" ? (
        <WorkoutForm
          type='Plan'
          submitting={submitting}
          handleSubmit={createPlannedWorkout}
          handleClick={handleClick}
          post={post}
          setPost={setPost}
          date={date}
          setDate={setDate}
        />
      ) : post.tag === "App" ? (
        <AppForm
          type='Plan'
          submitting={submitting}
          handleSubmit={createPlannedWorkout}
          post={post}
          setPost={setPost}
          date={date}
          setDate={setDate}
        />
      ) : post.tag === "Class" ? (
        <ClassForm
          type='Plan'
          submitting={submitting}
          handleSubmit={createPlannedWorkout}
          post={post}
          setPost={setPost}
          date={date}
          setDate={setDate}
        />
      ) : post.tag === "Cardio" ? (
        <CardioForm
          type='Plan'
          submitting={submitting}
          handleSubmit={createPlannedWorkout}
          post={post}
          setPost={setPost}
          date={date}
          setDate={setDate}
        />
      ) : post.tag === "HIIT" ? (
        <HighIntensityForm
          type='Plan'
          submitting={submitting}
          handleSubmit={createPlannedWorkout}
          handleClick={handleClick}
          post={post}
          setPost={setPost}
          date={date}
          setDate={setDate}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default PlanWorkout;
