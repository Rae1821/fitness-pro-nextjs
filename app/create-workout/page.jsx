'use client'

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import WorkoutForm from '@components/WorkoutForm';

const createNewWorkout = () => {
    const router = useRouter();
    const { data: session } = useSession();


    const [submitting, setSubmitting] = useState(false);
    // const [post, setPost] = useState({
    //     focus: '',
    //     date: '',
    //     duration: 0,
    // })

    const [exerciseRow, setExerciseRow] = useState([{
            tag: '',
            exercise: '',
            sets: 0,
            reps: 0,
            weight1: 0,
            weight2: 0,
            weight3: 0
    }])

    const handleFormChange = (index, event) => {
        let data = [...exerciseRow];
        data[index][event.target.name] = event.target.value;
        setExerciseRow(data)
    }

    const handleAddExercise = () => {
        let newExerciseObj = {
            tag: '',
            exercise: '',
            sets: 0,
            reps: 0,
            weight1: 0,
            weight2: 0,
            weight3: 0
        }
        let newRow = setExerciseRow([...exerciseRow, newExerciseObj])
    }

    console.log()

    const createWorkout = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        try{
            const response = await fetch('/api/workout/new',
            {
                method: 'POST',
                body: JSON.stringify({
                    userId: session?.user.id,
                    exerciseRow: exerciseRow.map((ex) => {
                        return {
                            tag: ex.tag,
                            exercise: ex.exercise,
                            sets: ex.sets,
                            reps: ex.reps,
                            weight1: ex.weight1,
                            weight2: ex.weight2,
                            weight3: ex.weight3,
                        }
                    })
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
        submitting={submitting}
        handleSubmit={createWorkout}
        handleFormChange={handleFormChange}
        handleAddExercise={handleAddExercise}
        exerciseRow={exerciseRow}
        setExerciseRow={setExerciseRow}
        />
  )
}

export default createNewWorkout;
