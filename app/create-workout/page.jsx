'use client'

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import WorkoutForm from '@components/strength/WorkoutForm';
import ClassForm from '@components/class/ClassForm';
import CardioForm from '@components/cardio/CardioForm';
import HighIntensityForm from '@components/hiit/HighIntensityForm';


const createNewWorkout = () => {
    const router = useRouter();
    const { data: session } = useSession();

    const [submitting, setSubmitting] = useState(false);

    const [date, setDate] = useState(new Date());

    const [workoutType, setWorkoutType] = useState('')

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
        setDate(date);
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
                    date: date,
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
                    exerciseObj: post.exerciseObj,

                }),
            });
            if(response.ok){
                router.push('/dashboard');
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
                    value={post.tag}
                    onChange={(e) => setPost({...post, tag: e.target.value })} className="select select-bordered"
                >
                    <option>Pick one</option>
                    <option>Cardio</option>
                    <option>Class</option>
                    <option>HIIT</option>
                    <option>Strength</option>
                </select>
            </div>
        </div>


        {post.tag === 'Strength' ?
            <WorkoutForm
                type="Create"
                submitting={submitting}
                handleSubmit={createWorkout}
                handleClick={handleClick}
                post={post}
                setPost={setPost}
                date={date}
                setDate={setDate}
            />


        : post.tag === 'Class' ?
            <ClassForm
                type="Create"
                submitting={submitting}
                handleSubmit={createWorkout}
                post={post}
                setPost={setPost}
                date={date}
                setDate={setDate}
            />

        : post.tag === 'Cardio' ?
            <CardioForm
                type="Create"
                submitting={submitting}
                handleSubmit={createWorkout}
                post={post}
                setPost={setPost}
                date={date}
                setDate={setDate}
                // selectedDate={selectedDate}
                // setSelectedDate={setSelectedDate}
            />

        :  post.tag === 'HIIT' ?
            <HighIntensityForm
                type="Create"
                submitting={submitting}
                handleSubmit={createWorkout}
                post={post}
                setPost={setPost}
                date={date}
                setDate={setDate}
                // selectedDate={selectedDate}
                // setSelectedDate={setSelectedDate}
            />

        : <div></div>

        }

    </div>

  )
}

export default createNewWorkout;



