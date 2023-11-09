'use client'

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';


import { GrRun } from "react-icons/gr"


const CardioCard = ({ post, handleEdit, handleDelete }) => {
    const { data: session } = useSession();
    const pathName = usePathname();
    const router = useRouter();


    const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });

    const sortedDate = formattedDate.split('/')

    const newSortedDate = sortedDate.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
    })



  return (
    <div>
    {/* Daisy UI Collapse */}
        <div className="collapse collapse-plus border border-base-200 bg-base-100 mb-4 max-w-3xl font-display md:px-4 shadow-lg bg-base-50 ">

            <input type="checkbox" />

            <div className="collapse-title text-xl font-medium">
                <div className="flex items-center justify-between ">
                    <div className="flex items-center">
                        <div className="p-2 rounded-full mr-4 bg-error">
                            <GrRun />
                        </div>
                        <p className="flex flex-col text-xs md:text-sm lg:text-base font-light">
                        Activity Name
                        <span className="font-semibold lg:text-lg">{post.workoutName}</span>
                        </p>
                    </div>
                    <p className="flex flex-col text-xs md:text-sm lg:text-base row-start-2 font-light">
                    Date
                        <span className="font-bold">{newSortedDate.join('/')}</span>
                    </p>
                    <p className="flex flex-col text-xs md:text-sm lg:text-base font-light">
                        Duration
                        <span className="font-bold">{post.duration} min.</span>
                    </p>

                </div>
            </div>
            <div className="collapse-content bg-base-100 px-0 md:px-4 pt-2 rounded-md">
                <div className="grid grid-cols-4">
                    <p className="flex flex-col text-xs md:text-sm lg:text-base font-light col-start-3">
                        Speed
                        <span className="font-bold">{post.speed}</span>
                    </p>
                    <p className="flex flex-col text-xs md:text-sm lg:text-base font-light col-start-4">
                        Incline
                        <span className="font-bold">{post.incline}</span>
                    </p>
                </div>

                {session?.user.id === post.creator._id
                        && pathName === '/profile' && (
                        <div className="mt-5 flex items-center justify-center md:justify-end gap-4 pt-3">
                            <p
                                className="font-inter text-sm cursor-pointer btn btn-sm btn-outline btn-accent"
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

export default CardioCard
