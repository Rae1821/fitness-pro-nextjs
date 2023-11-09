'use client'

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import WorkoutForm from '@components/WorkoutForm';
import ClassForm from '@components/ClassForm';
import CardioForm from '@components/CardioForm';
import HighIntensityForm from '@components/HighIntensityForm';


const createNewWorkout = () => {
    const router = useRouter();
    const { data: session } = useSession();

    const [submitting, setSubmitting] = useState(false);

    const [selectedDate, setSelectedDate] = useState(new Date());

    const [workoutType, setWorkoutType] = useState('')


    const [post, setPost] = useState(
        {
            workoutName: '',
            workoutFocus: '',
            tag: '',
            instructor: '',
            time: '',
            speed: '',
            incline: '',
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
        setSelectedDate(selectedDate);
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

    const handleSelected = () => {
       setWorkoutType(workoutType)

    }

    const handleOnChange = (e) => {
        const updatedExerciseObj = [...post.exerciseObj];
        updatedExerciseObj[e.target.name] = e.target.value;
        setPost({...post, exerciseObj: updatedExerciseObj });
    }

    const handleSubmit = () => {
        createWorkout();
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
                    date: selectedDate,
                    workoutName: post.workoutName,
                    workoutFocus: post.workoutFocus,
                    tag: post.tag.toLowerCase(),
                    instructor: post.instructor,
                    time: post.time,
                    speed: post.speed,
                    incline: post.incline,
                    duration: post.duration,
                    exerciseObj: post.exerciseObj,

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

    <div className="w-full">
        <div>
            <h2 className="mt-10 mb-4 text-center">Choose your workout type</h2>
            <div className="form-control w-full max-w-xs mx-auto">
                <select
                    value={workoutType}
                    onChange={(e) => {setWorkoutType(e.target.value)}} className="select select-bordered select-info"
                >
                    <option>Pick one</option>
                    <option>Cardio</option>
                    <option>Class</option>
                    <option>HIIT</option>
                    <option>Strength</option>
                </select>
            </div>
        </div>


        {workoutType === 'Strength' ?

            <WorkoutForm
                type="Create"
                tag="strength"
                submitting={submitting}
                handleSubmit={createWorkout}
                handleClick={handleClick}
                post={post}
                setPost={setPost}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            />


        : workoutType === 'Class' ?
            <ClassForm
                type="Create"
                tag="class"
                submitting={submitting}
                handleSubmit={createWorkout}
                post={post}
                setPost={setPost}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            />

        : workoutType === 'Cardio' ?
            <CardioForm
                type="Create"
                tag="cardio"
                submitting={submitting}
                handleSubmit={createWorkout}
                post={post}
                setPost={setPost}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            />

        :  workoutType === 'HIIT' ?
            <HighIntensityForm
                type="Create"
                tag="hiit"
                submitting={submitting}
                handleSubmit={createWorkout}
                post={post}
                setPost={setPost}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            />

        : <div></div>

        }

    </div>

  )
}

export default createNewWorkout;



