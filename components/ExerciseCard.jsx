'use client';

import Image from 'next/image';
import { useState } from 'react';

const ExerciseCard = ({ exercise }) => {
    const { bodyPart, equipment, gifUrl, id, name, target, secondaryMuscles, instructions } = exercise;

  return (

        <div className="card w-full bg-base-100 shadow-xl">
            <figure>
                <img src={gifUrl} alt="exercises"/>
            </figure>


            <div className="card-body">
                <h2 className="card-title capitalize">
                {name}
                </h2>
                <div className="flex justify-start items-center gap-2">
                    <div className="badge badge-neutral badge-sm">{target}</div>
                    <div className="badge badge-ghost badge-sm">{equipment}</div>
                </div>

                    {instructions.map((item) => (
                        <p key={item} className="text-sm text-gray-600 my-2">{item}</p>
                    ))}
                <div className="card-actions justify-end">
                    <button className="btn btn-sm btn-primary">Add</button>
                </div>
            </div>
        </div>
  )
}

export default ExerciseCard


{/* API data that comes back from fetch:
bodyPart:"waist"
equipment:"body weight"
gifUrl:"https://v2.exercisedb.io/image/zDyBgIu9rqx9EV"
id:"0001"
name:"3/4 sit-up"
target:"abs"
secondaryMuscles:
0:"hip flexors"
1:"lower back"
instructions:
0:"Lie flat on your back with your knees bent and feet flat on the ground."
1:"Place your hands behind your head with your elbows pointing outwards."
2:"Engaging your abs, slowly lift your upper body off the ground, curling forward until your torso is at a 45-degree angle."
3:"Pause for a moment at the top, then slowly lower your upper body back down to the starting position."
4:"Repeat for the desired number of repetitions." */}