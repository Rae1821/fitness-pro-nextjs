

'use client'

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import WorkoutForm from '@components/WorkoutForm';

const EditWorkout = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const workoutId = searchParams.get('id');


    const [submitting, setSubmitting] = useState(false);
    // const [exerciseRow, setExerciseRow] = useState([{
    //         tag: '',
    //         exercise: '',
    //         sets: 0,
    //         reps: 0,
    //         weight1: 0,
    //         weight2: 0,
    //         weight3: 0
    // }])

    const [post, setPost] = useState({
      tag: '',
      exercise: '',
    });


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




    useEffect(() => {
      const getWorkoutDetails = async () => {
        const response = await fetch(`/api/workout/${workoutId}`);
        const data = await response.json();

        setPost({
          tag: data.tag,
          exercise: data.exercise
        })

        // setExerciseRow({
        //   exerciseRow: data.exerciseRow.map((item) => {
        //       return {
        //         id: item.id,
        //         tag: item.tag,
        //         exercise: item.exercise,
        //         sets: item.sets,
        //         reps: item.reps,
        //         weight1: item.weight1,
        //         weight2: item.weight2,
        //         weight3: item.weight3,
        //       }
        //   })
        // });
      };

      if (workoutId) getWorkoutDetails();
    }, [workoutId]);

    const updateWorkout = async (e) => {
      e.preventDefault();
      setSubmitting(true);

      if(!workoutId) return alert("Missing WorkoutId!");

        try {
          const response = await fetch(`/api/workout/${workoutId}`, {
            method: "PATCH",
            body: JSON.stringify({
                tag: post.tag,
                exercise: post.exercise,
              })
          });

          if (response.ok) {
            router.push('/');
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
          post={post}
          setPost={setPost}
          // exerciseRow={exerciseRow}
          // setExerciseRow={setExerciseRow}
           submitting={submitting}
          // handleSubmit={updateWorkout}
          // handleFormChange={handleFormChange}
          // handleAddExercise={handleAddExercise}
          // totalExercisesCompleted={totalExercisesCompleted}
      />
    );
};

export default EditWorkout;
