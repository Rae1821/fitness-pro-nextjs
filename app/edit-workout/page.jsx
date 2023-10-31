

'use client'

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useSession } from 'next-auth/react';

import WorkoutForm from '@components/WorkoutForm';

const EditWorkout = () => {
    const router = useRouter();
    const { data: session } = useSession();
    const searchParams = useSearchParams();
    const workoutId = searchParams.get('id');


    const [submitting, setSubmitting] = useState(false);

    const [post, setPost] = useState(
      {
          workoutName: '',
          date: '',
          duration: '',
          exerciseObj: [
              {
                  exercise: '',
                  tag:'',
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
              tag: '',
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

        setPost({
          workoutName: data.name,
          date: data.date,
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
              workoutName: post.workoutName,
              date: post.date,
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
        type="Edit"
        submitting={submitting}
        handleSubmit={updateWorkout}
        handleClick={handleClick}
        post={post}
        setPost={setPost}
      />
    );
};

export default EditWorkout;
