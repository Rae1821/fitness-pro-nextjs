'use client'

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import WorkoutForm from '@components/WorkoutForm';

const createNewWorkout = () => {
    const router = useRouter();
    const { data: session } = useSession();

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
        console.log(post)
    };

    const handleOnChange = (index, e) => {
        const updatedExerciseObj = [...post.exerciseObj];
        updatedExerciseObj[index][e.target.name] = e.target.value;
        setPost({...post, exerciseObj: updatedExerciseObj });
    }



    const createWorkout = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        try{
            const response = await fetch('/api/workout/new',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: session?.user.id,
                    workoutName: post.workoutName,
                    date: post.date,
                    duration: post.duration,
                    exerciseObj: post.exerciseObj
                }),
            });
            if(response.ok){
                router.push('/profile');
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
        submitting={submitting}
        handleSubmit={createWorkout}
        handleClick={handleClick}
        post={post}
        setPost={setPost}
    />
  )
}

export default createNewWorkout;
