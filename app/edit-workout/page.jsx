'use client'

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useSession } from 'next-auth/react';

import WorkoutForm from '@components/WorkoutForm';
import ClassForm from '@components/ClassForm';
import CardioForm from '@components/CardioForm';
import HighIntensityForm from '@components/HighIntensityForm';


const EditWorkout = () => {
    const router = useRouter();
    const { data: session } = useSession();
    const searchParams = useSearchParams();
    const workoutId = searchParams.get('id');

    const [submitting, setSubmitting] = useState(false);

    const [selectedDate, setSelectedDate] = useState(new Date());

    const [workoutType, setWorkoutType] = useState('');

    const [post, setPost] = useState(
      {
          workoutName: '',
          workoutFocus: '',
          tag: '',
          instructor: '',
          duration: '',
          exerciseObj: [
              {
                  exercise: '',
                  sets: 0,
                  reps: 0,
                  weight1: 0,
                  weight2: 0,
                  weight3: 0
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
              reps: 0,
              weight1: 0,
              weight2: 0,
              weight3: 0,
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
              selectedDate: selectedDate,
              workoutName: post.workoutName,
              workoutFocus: post.workoutFocus,
              tag: post.tag,
              instructor: post.instructor,
              duration: post.duration,
              exerciseObj: post.exerciseObj
              })
          });

          if (response.ok) {
            router.push('/profile');
          }
        } catch (error) {
            console.log(error);
        } finally {
          setSubmitting(false);
        }
    }


    return (

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

    );
};

export default EditWorkout;


