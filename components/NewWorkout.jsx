"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

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

const NewWorkout = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setSubmitting] = useState(false);

  const [date, setDate] = useState(new Date());

  //   const [workoutType, setWorkoutType] = useState("");

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

  const createWorkout = async (e) => {
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
        router.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className='mt-24 min-h-screen w-full'>
      <div className='mx-auto w-full max-w-xs'>
        <Select
          defaultValue={post.tag}
          onValueChange={(e) => setPost({ ...post, tag: e })}
        >
          <SelectTrigger className='w-[280px]'>
            <SelectValue placeholder='Select a workout type' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='App'>App</SelectItem>
            <SelectItem value='Cardio'>Cardio</SelectItem>
            <SelectItem value='Strength'>Strength</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {post.tag === "Strength" ? (
        <WorkoutForm
          type='Create'
          submitting={submitting}
          handleSubmit={createWorkout}
          handleClick={handleClick}
          post={post}
          setPost={setPost}
          date={date}
          setDate={setDate}
        />
      ) : post.tag === "App" ? (
        <AppForm
          type='Create'
          submitting={submitting}
          handleSubmit={createWorkout}
          post={post}
          setPost={setPost}
          date={date}
          setDate={setDate}
        />
      ) : post.tag === "Class" ? (
        <ClassForm
          type='Create'
          submitting={submitting}
          handleSubmit={createWorkout}
          post={post}
          setPost={setPost}
          date={date}
          setDate={setDate}
        />
      ) : post.tag === "Cardio" ? (
        <CardioForm
          type='Create'
          submitting={submitting}
          handleSubmit={createWorkout}
          post={post}
          setPost={setPost}
          date={date}
          setDate={setDate}
        />
      ) : post.tag === "HIIT" ? (
        <HighIntensityForm
          type='Create'
          submitting={submitting}
          handleSubmit={createWorkout}
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

export default NewWorkout;
