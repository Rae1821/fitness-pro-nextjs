'use client'

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import WorkoutForm from '@components/WorkoutForm';

const Workout = () => {

    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        date: '',
        workoutType: '',
        workoutFocus: '',
        duration: 0,
        notes: '',
        exercise: '',
        sets: 0,
        reps: 0,
        weight1: 0,
        weight2: 0,
        weight3: 0,
        weight4: 0,
    })

    const createWorkout = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        try{
            const response = await fetch('/api/workout/new',
            {
                method: 'POST',
                body: JSON.stringify({
                    date: post.date,
                    userId: session?.user.id,
                    workoutType: post.workoutType,
                    workoutFocus: post.workoutFocus,
                    duration: post.duration,
                    notes: post.notes,
                    exercise: post.exercise,
                    set: post.sets,
                    reps: post.reps,

                })
            })
        } catch (error) {

        }
    }

  return (
    <WorkoutForm
        type="Create"
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={createWorkout}
        />
  )
}

export default Workout;
