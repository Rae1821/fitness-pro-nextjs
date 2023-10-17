'use client'

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import WorkoutForm from '@components/WorkoutForm';

const createNewWorkout = () => {
    const router = useRouter();
    const { data: session } = useSession();

    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        focus: '',
        date: '',
        exercise: '',
        sets: 0,
        reps: 0,
        weight: 0,
    })



    const createWorkout = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        try{
            const response = await fetch('/api/workout/new',
            {
                method: 'POST',
                body: JSON.stringify({
                    userId: session?.user.id,
                    focus: post.focus,
                    exercise: post.exercise,
                    sets: post.sets,
                    reps: post.reps,
                    weight: post.weight
                    // date: post.date,
                    // userId: session?.user.id,
                    // workoutType: post.workoutType,
                    // workoutFocus: post.workoutFocus,
                    // duration: post.duration,
                    // notes: post.notes,
                    // exerciseRow: post.exerciseRow,
                    // exerciseRow: post.exerciseRow.map((item) => ({
                    //     exercise: item.exercise,
                    //     sets: item.sets,
                    //     reps: item.reps,
                    //     weight1: item.weight1,
                    //     weight2: item.weight2,
                    //     weight3: item.weight3,
                    //     weight4: item.weight4,

                    // }))
                }),
            });
            if(response.ok){
                router.push('/');
            }
        } catch (error) {
            console.log(error)
        } finally {
            setSubmitting(false);
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

export default createNewWorkout;
