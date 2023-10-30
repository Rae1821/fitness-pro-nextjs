'use client'

import { useState } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';



const DashboardCard = ({ post, handleEdit, handleDelete }) => {

    const { data: session } = useSession();
    const pathName = usePathname();
    const router = useRouter();


    const [liked, setLiked] = useState(false);
    const [open, setOpen] = useState(false);


    const handleLikeClick = () => {
        setLiked(prevSetLiked => !prevSetLiked)
    }


    const toggleWorkout = (index) => {
        setOpen(prevOpen => !prevOpen)
    }




  return (

    <div>
    {/* Daisy UI Collapse */}
    <div className="collapse bg-base-200 mb-4">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
            <div className="flex justify-between gap-2">
                <p className="flex flex-col text-sm">Workout Name <span className="text-base font-bold">{post.name}</span></p>
                <p className="flex flex-col text-sm">
                    Completed On
                    <span className="text-base font-bold">{post.date}</span></p>
                <p className="flex flex-col text-sm">
                    Duration
                    <span className="text-base font-bold">{post.duration} min.</span></p>
                <p>
                    <Image
                        src={!open ? '/assets/icons/plus.svg' : '/assets/icons/minus.svg'}
                        alt="open details"
                        width={24}
                        height={24}
                        onClick={() => toggleWorkout()}
                    />
                </p>
            </div>
        </div>
        <div className="collapse-content">

            <ul className="border-b">
                    <li className="bg-base-100 rounded-lg my-3 p-2 grid md:grid-cols-7 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
                        <div className="flex items-center col-span-2">
                            <div onClick={handleLikeClick} className="rounded-lg p-3">
                                <Image
                                    src={liked ? '/assets/icons/star-filled.svg'
                                    : '/assets/icons/star.svg'
                                    }
                                alt="like btn"
                                width={20}
                                height={20}
                                className="items-center"
                                />
                            </div>
                            <div className="pl-4">
                                <p className="font-bold">{post.exercise}</p>
                                <p className="text-sm">#{post.tag}</p>
                            </div>

                        </div>
                        <p className="">Sets<span className="block font-bold">{post.sets}</span></p>
                        <p className="">Reps<span className="block">{post.reps}</span></p>
                        <p className="">Set 1<span className="block">{post.weight1}lbs.</span></p>
                        <p className="">Set 2 <span className="block">{post.weight2}lbs.</span></p>
                        <p className="">Set 3 <span className="block">{post.weight3}lbs.</span></p>

                    </li>
                </ul>
                    {session?.user.id === post.creator._id
                        && pathName === '/profile' && (
                        <div className="mt-5 flex items-center justify-end gap-4 boder-t border-gray-100 pt-3">
                            <p
                                className="font-inter text-sm cursor-pointer"
                                onClick={handleEdit}
                            >
                                Edit
                            </p>
                            <p
                                className="font-inter text-sm cursor-pointer"
                                onClick={handleDelete}
                            >
                                Delete
                            </p>
                        </div>
                    )}
        </div>
    </div>


{/*
        <div>
            <div className="my-3 p-2 grid md:grid-cols-7 sm:grid-cols-3 grid-cols-3 items-center justify-between cursor-pointer">
                <span className="ml-8">Exercise</span>
                <span className="sm:text-left text-right">Date</span>
                <span className="hidden md:grid">Sets</span>
                <span className="hidden sm:grid">Reps</span>
                <span className="hidden md:grid">Weight1</span>
                <span className="hidden md:grid">Weight2</span>
                <span className="hidden md:grid">Weight3</span>
            </div>
            <ul className="border-b">
                <li className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-7 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
                    <div className="flex">
                        <div onClick={handleLikeClick} className="bg-green-400 rounded-lg p-3">
                            <Image
                                src={liked ? '/assets/icons/star-filled.svg'
                                : '/assets/icons/star.svg'
                                }
                            alt="like btn"
                            width={20}
                            height={20}
                            className="items-center"
                            />
                        </div>
                        <div className="pl-4">
                            <p className="text-gray-800 font-bold">{post.exercise}</p>
                            <p className="text-gray-800 text-sm">#{post.tag}</p>
                        </div>

                    </div>
                    <p className="text-gray-600 sm:text-left text-right">
                        {currentDate}
                    </p>
                    <p className="hidden md:flex">{post.sets}</p>
                    <p className="hidden md:flex">{post.reps}</p>
                    <p className="hidden md:flex">{post.weight1}</p>
                    <p className="hidden md:flex">{post.weight2}</p>
                    <p className="hidden md:flex">{post.weight3}</p>

                </li>
            </ul> */}

            {/* {session?.user.id === post.creator._id
                    && pathName === '/profile' && (
                        <div className="mt-5 flex items-center justify-end gap-4 boder-t border-gray-100 pt-3">
                            <p
                                className="font-inter text-sm cursor-pointer"
                                onClick={handleEdit}
                            >
                                Edit
                            </p>
                            <p
                                className="font-inter text-sm cursor-pointer"
                                onClick={handleDelete}
                            >
                                Delete
                            </p>
                        </div>
                    )}
           */}



                {/* <ul className="">
                {exerciseRow.map((row, index) => (
                    <li
                        key={index}
                        className={open ? "grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 items-center justify-between gap-4 md:gap-3 rounded-lg my-1 p-4 opacity-100 transition-all duration-300 ease-out border-b-2" : "opacity-0 max-h-0 overflow-y-hidden transition-all duration-300 ease-in"}
                        >

                        <div className="flex lg:flex-col md:w-20 justify-between items-center px-4 gap-6 md:gap-2 md:text-sm">
                            <p className="font-semibold text-gray-500">Tag:</p>
                            <p
                                className="font-inter font-semibold text-gray-500 cursor-pointer"
                                onClick={() => handleTagClick && handleTagClick(row.tag)}
                            >
                                #{row.tag}
                            </p>
                        </div>
                        <div className="flex lg:flex-col justify-between items-center px-4 gap-2 md:text-sm">
                            <p className="font-semibold text-gray-500">Exercise:</p>
                            <p className="font-inter font-semibold text-gray-900">{row.exercise}</p>
                        </div>
                        <div className="flex lg:flex-col md:w-20 justify-between items-center px-4 gap-2 md:text-sm">
                            <p className="font-semibold text-gray-500">Sets: </p>
                            <p className="font-inter font-semibold text-gray-900">{row.reps}</p>
                        </div>
                        <div className="flex lg:flex-col md:w-20 justify-between items-center px-4 gap-2 md:text-sm">
                            <p className="font-semibold text-gray-500">Reps: </p>
                            <p className="font-inter font-semibold text-gray-900">{row.reps}</p>
                        </div>
                        <div className="flex justify-between lg:flex-col md:w-20 items-center px-4 gap-2 md:text-sm">
                            <p className="font-semibold text-gray-500">Set 1:</p>
                            <p className="font-inter font-semibold text-gray-900">{row.weight1}lbs</p>
                        </div>
                        <div className="flex lg:flex-col md:w-20 justify-between items-center px-4 gap-2 md:text-sm">
                            <p className="font-semibold text-gray-500">Set 2:</p>
                            <p className="font-inter font-semibold text-gray-900">{row.weight2}lbs</p>
                        </div>
                        <div className="flex lg:flex-col md:w-20 justify-between items-center px-4 gap-2 md:text-sm">
                            <p className="font-semibold text-gray-500">Set 3:</p>
                            <p className="font-inter font-semibold text-gray-900">{row.weight3}lbs</p>
                        </div>

                    </li>
                    ))}

                </ul> */}



    </div>

  )
}

export default DashboardCard
