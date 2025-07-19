"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";

import WorkoutForm from "@/components/strength/WorkoutForm";
import ClassForm from "@/components/class/ClassForm";
import CardioForm from "@/components/cardio/CardioForm";
import HighIntensityForm from "@/components/hiit/HighIntensityForm";

const UpdateWorkout = () => {
  const searchParams = useSearchParams();
  const workoutId = searchParams.get("id");

  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setSubmitting] = useState(false);

  const [date, setDate] = useState(new Date());

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

  useEffect(() => {
    const getWorkoutDetails = async () => {
      if (!workoutId) return alert("Missing WorkoutId!");

      try {
        const response = await fetch(`/api/workout/${workoutId}`);
        const data = await response.json();
        setPost({
          workoutName: data.workoutName,
          workoutFocus: data.workoutFocus,
          date: data.date,
          tag: data.tag,
          instructor: data.instructor,
          time: data.time,
          intervals: data.intervals,
          speedHigh: data.speedHigh,
          speedLow: data.speedLow,
          distance: data.distance,
          duration: data.duration,
          incline: data.incline,
          exerciseObj: data.exerciseObj,
        });
      } catch (error) {
        console.log("Failed to fetch workout details", error);
      }
    };

    getWorkoutDetails();
  }, [workoutId]);

  const updateWorkout = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (!workoutId) return alert("Missing WorkoutId!");

    try {
      const response = await fetch(`/api/workout/${workoutId}`, {
        method: "PATCH",
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
    <div>
      {post.tag === "strength" ? (
        <WorkoutForm
          type="Save"
          submitting={submitting}
          handleSubmit={updateWorkout}
          handleClick={handleClick}
          post={post}
          setPost={setPost}
          date={date}
          setDate={setDate}
        />
      ) : post.tag === "class" ? (
        <ClassForm
          type="Save"
          submitting={submitting}
          handleSubmit={updateWorkout}
          post={post}
          setPost={setPost}
          date={date}
          setDate={setDate}
        />
      ) : post.tag === "cardio" ? (
        <CardioForm
          type="Save"
          submitting={submitting}
          handleSubmit={updateWorkout}
          post={post}
          setPost={setPost}
          date={date}
          setDate={setDate}
        />
      ) : post.tag === "hiit" ? (
        <HighIntensityForm
          type="Save"
          submitting={submitting}
          handleSubmit={updateWorkout}
          handleClick={handleClick}
          post={post}
          setPost={setPost}
          date={date}
          setDate={setDate}
        />
      ) : null}
    </div>
  );
};

export default UpdateWorkout;
