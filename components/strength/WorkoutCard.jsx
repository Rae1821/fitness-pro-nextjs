'use client'

import { useState } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import { FaDumbbell } from "react-icons/fa";


const WorkoutCard = ({ post, handleEdit, handleDelete }) => {

    const { data: session } = useSession();
    const pathName = usePathname();
    const router = useRouter();


    const formattedDate = new Date(post.date).toLocaleDateString();

    const totalLoad = post.exerciseObj.reduce((acc, exer) => {
         const totalWeight = (exer.weight1 + exer.weight2 + exer.weight3) * exer.reps
         return acc + totalWeight
})


  return (

    <div>
    {/* Daisy UI Collapse */}
        <div className="collapse collapse-plus border-b border-neutral-content mb-4 font-display mx-auto md:px-2 w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl bg-[#ffffff] hover:bg-[#2fc9d7] text-[#272925]">
            <input className="pr-2" type="checkbox" />
            <div className="collapse-title text-xl font-medium">
                <div className="flex justify-between items-center">
                    <div>
                        {/* <p className="badge badge-outline badge-info badge-sm md:badge-md">strength</p> */}
                        <p className="bg-[#F2F2F2] p-2 rounded-full"><FaDumbbell className="text-[#2fc9d7]"/></p>
                    </div>
                    <div className="flex items-center justify-start">
                        <p className="flex flex-col text-xs md:text-sm lg:text-base font-light text-[#D9D9D9]">
                        Focus
                        <span className="font-semibold lg:text-lg text-[#]">{post.workoutName}</span>
                        </p>
                    </div>
                    <div>
                        <p className="flex flex-col text-xs md:text-sm lg:text-base row-start-2 font-light">
                        Date
                            <span className="font-bold">{formattedDate}</span>
                        </p>
                    </div>
                    <div>
                        <p className="flex flex-col text-xs md:text-sm lg:text-base font-light">
                            Duration
                            <span className="font-bold">{post.duration} min.</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="collapse-content bg-[#ffffff] text-info-content px-0 md:px-4 pt-2 rounded-sm">


                    <table className="table table-xs table-auto">
                        <thead>
                            <tr className="text-center border-[#F2F2F2] text-xs md:text-sm lg:text-md text-info-content">
                                <th></th>
                                <th>Sets</th>
                                <th>Lbs</th>
                                <th>R 1</th>
                                <th>R 2</th>
                                <th>R 3</th>
                                {/* <th>Load</th> */}
                            </tr>
                        </thead>
                        <tbody>
                        {post.exerciseObj.map((exer, index) => (
                            <tr key={index} className=" hover:bg-[#F2F2F2] border-[#F2F2F2] text-center text-xs md:text-md lg:text-lg">
                                <th className="text-left">{exer.exercise}
                                </th>
                                <td>{exer.sets}</td>
                                <td>{exer.weight}</td>
                                <td>{exer.rep1}</td>
                                <td>{exer.rep2}</td>
                                <td>{exer.rep3}</td>
                                {/* <td>{(exer.weight1 + exer.weight2 + exer.weight3) * exer.reps}</td> */}
                                <td></td>
                            </tr>
                        ))}

                        </tbody>
                    </table>

                    {session?.user.id === post.creator._id
                        && pathName === '/dashboard' && (
                        <div className="mt-5 flex items-center justify-center md:justify-end gap-4 pt-3">
                            <p
                                className="font-inter text-sm cursor-pointer btn btn-sm btn-error"
                                onClick={handleEdit}
                            >
                                Edit
                            </p>
                            <p
                                className="font-inter text-sm cursor-pointer btn btn-ghost btn-sm"
                                onClick={handleDelete}
                            >
                                Delete
                            </p>
                        </div>
                    )}
            </div>
        </div>
    </div>
  )
}

export default WorkoutCard



    // const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    //     weekday: 'short',
    //     month: 'short',
    //     day: 'numeric',
    //     year: 'numeric',
    // });