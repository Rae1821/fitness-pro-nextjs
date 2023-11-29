'use client'

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useSession } from 'next-auth/react';

import WorkoutForm from '@components/strength/WorkoutForm';
import ClassForm from '@components/class/ClassForm';
import CardioForm from '@components/cardio/CardioForm';
import HighIntensityForm from '@components/hiit/HighIntensityForm';


const EditWorkout = () => {
    const router = useRouter();
    const { data: session } = useSession();
    const searchParams = useSearchParams();
    const workoutId = searchParams.get('id');

    const [submitting, setSubmitting] = useState(false);

    const [selectedDate, setSelectedDate] = useState(new Date());

    const [post, setPost] = useState(
      {
          workoutName: '',
          workoutFocus: '',
          tag: '',
          instructor: '',
          time: '',
          intervals: 0,
          speedHigh: 0,
          speedLow: 0,
          incline: 0,
          duration: 0,
          exerciseObj: [
              {
                  exercise: '',
                  sets: 0,
                  weight: 0,
                  rep1: 0,
                  rep2: 0,
                  rep3: 0
              }
          ]
      }
    )


    const handleClick = (e) => {
      e.preventDefault();
      setPost({
          ...post,
          exerciseObj: [...post.exerciseObj, {
              exercise: '',
              sets: 0,
              weight: 0,
              rep1: 0,
              rep2: 0,
              rep3: 0,
          }]
      });
    };


    useEffect(() => {
      const getWorkoutDetails = async () => {
        const response = await fetch(`/api/workout/${workoutId}`);
        const data = await response.json();
        setSelectedDate(data.selectedDate)
        setPost({
          workoutName: data.workoutName,
          workoutFocus: data.workoutFocus,
          tag: data.tag,
          instructor: data.instructor,
          time: data.time,
          intervals: data.intervals,
          speedHigh: data.speedHigh,
          speedLow: data.speedLow,
          incline: data.incline,
          duration: data.duration,
          exerciseObj: data.exerciseObj,
        })

      };

      if (workoutId) getWorkoutDetails();
    }, [workoutId]);

    const updateWorkout = async (e) => {
      e.preventDefault();
      setSubmitting(true);

      if(!workoutId) return alert("Missing WorkoutId!");

        try {
          const response = await fetch(`/api/workout/${workoutId}`, {
            method: 'PATCH',
            body: JSON.stringify({
              userId: session?.user.id,
              date: selectedDate,
              workoutName: post.workoutName,
              workoutFocus: post.workoutFocus,
              tag: post.tag.toLowerCase(),
              instructor: post.instructor,
              time: post.time,
              intervals: post.intervals,
              speedHigh: post.speedHigh,
              speedLow: post.speedLow,
              incline: post.incline,
              duration: post.duration,
              exerciseObj: post.exerciseObj
              })
          });

          if (response.ok) {
            router.push('/dashboard');
          }
        } catch (error) {
            console.log(error);
        } finally {
          setSubmitting(false);
        }
    }


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
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        ) : post.tag === "class" ? (
          <ClassForm
              type="Save"
              submitting={submitting}
              handleSubmit={updateWorkout}
              post={post}
              setPost={setPost}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
        ) : post.tag === "cardio" ? (
            <CardioForm
                type="Save"
                submitting={submitting}
                handleSubmit={updateWorkout}
                post={post}
                setPost={setPost}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            />
        ) : post.tag === "hiit" ? (
            <HighIntensityForm
                type="Save"
                submitting={submitting}
                handleSubmit={updateWorkout}
                post={post}
                setPost={setPost}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            />
        ) : null
        }

        </div>

    );
};

export default EditWorkout;


