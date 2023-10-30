'use client'

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import WorkoutForm from '@components/WorkoutForm';

const createNewWorkout = () => {
    const router = useRouter();
    const { data: session } = useSession();


    const [submitting, setSubmitting] = useState(false);

    const [post, setPost] = useState([
        {
        name: '',
        date: '',
        duration: 0,
        tag: '',
        exercise: '',
        sets: 0,
        reps: 0,
        weight1: 0,
        weight2: 0,
        weight3: 0
    }
]);

    const postObj = {
        name: '',
        date: '',
        duration: 0,
        tag: '',
        exercise: '',
        sets: 0,
        reps: 0,
        weight1: 0,
        weight2: 0,
        weight3: 0
    }


    // const handleFormChange = (index, event) => {
    //     let data = [...exerciseRow];
    //     data[index][event.target.name] = event.target.value;
    //     setExerciseRow(data)
    // }

    // const handleAddExercise = () => {
    //     let newExerciseObj = {
    //         tag: '',
    //         exercise: '',
    //         sets: 0,
    //         reps: 0,
    //         weight1: 0,
    //         weight2: 0,
    //         weight3: 0
    //     }
    //     let newRow = setExerciseRow([...exerciseRow, newExerciseObj])
    // }


    const createWorkout = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        try{
            const response = await fetch('/api/workout/new',
            {
                method: 'POST',
                body: JSON.stringify({
                    userId: session?.user.id,
                    name: post.name,
                    date: post.date,
                    duration: post.duration,
                    tag: post.tag,
                    exercise: post.exercise,
                    sets: post.sets,
                    reps: post.reps,
                    weight1: post.weight1,
                    weight2: post.weight2,
                    weight3: post.weight3
                    // exerciseRow: exerciseRow.map((ex) => {
                    //     return {
                    //         tag: ex.tag,
                    //         exercise: ex.exercise,
                    //         sets: ex.sets,
                    //         reps: ex.reps,
                    //         weight1: ex.weight1,
                    //         weight2: ex.weight2,
                    //         weight3: ex.weight3,
                    //     }
                    // })
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
        //handleFormChange={handleFormChange}
        post={post}
        setPost={setPost}
        //handleAddExercise={handleAddExercise}
        //exerciseRow={exerciseRow}
        //setExerciseRow={setExerciseRow}
        // totalExercisesCompleted={totalExercisesCompleted}
    />
  )
}

export default createNewWorkout;
