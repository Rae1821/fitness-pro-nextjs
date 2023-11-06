'use client'

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import { FiZap } from 'react-icons/fi';


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
        <div className="collapse collapse-plus border  border-base-200 bg-base-100 mb-4 max-w-3xl font-display md:px-4 shadow-lg bg-base-50">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">

                <div className="flex justify-between items-center gap-2">
                <div>{post.tag}</div>
                    <div className="flex items-center">
                        <div className="p-2 rounded-full mr-4 bg-accent">
                            <FiZap />
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

                {post.exerciseObj.map((exer, index) => (
                    <table key={index} className="table table-xs table-auto md:table-md table-zebra">
                        <thead>
                            <tr className="text-center">
                                <th></th>
                                <th>Sets</th>
                                <th>Reps</th>
                                <th>Weight 1</th>
                                <th>Weight 2</th>
                                <th>Weight 3</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className="text-sm md:text-base lg:text-base w-40">{exer.exercise}
                                    <br />
                                    <span className={exer.tag === 'strength' ? "badge badge-xs badge-info mt-2" : exer.tag === 'cardio' ? "badge badge-xs badge-error" : exer.tag === 'hiit' ? 'badge badge-xs badge-warning' : "badge badge-xs badge-secondary"}>{exer.tag}</span>
                                </th>
                                <td className="text-center ">{exer.sets}</td>
                                <td className="text-center">{exer.reps}</td>
                                <td className="text-center">{exer.weight1}</td>
                                <td className="text-center">{exer.weight2}</td>
                                <td className="text-center">{exer.weight3}</td>
                            </tr>
                        </tbody>
                    </table>
                ))}

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
