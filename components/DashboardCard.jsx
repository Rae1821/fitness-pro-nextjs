'use client'

import { useState } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';


const getDate = () => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}/${date}/${year}`;
}


const DashboardCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {

    const { data: session } = useSession();
    const pathName = usePathname();
    const router = useRouter();


    const [liked, setLiked] = useState(false);
    const [currentDate, setCurrentDate] = useState(getDate());

    const [open, setOpen] = useState(false);


    const handleLikeClick = () => {
        setLiked(prevSetLiked => !prevSetLiked)
    }


    const toggleWorkout = (index) => {
        setOpen(prevOpen => !prevOpen)
    }




  return (


    <div>
        <div className="glassmorphism w-[902px]">
            <div className="p-4 text-center md:text-left md:pl-4 flex justify-between items-center bg-white/20 w-full">

            {/* <div onClick={handleProfileClick}>
                <Image
                    src={session?.user.image}
                    alt="user_image"
                    width={40}
                    height={40}
                    className="rounded-full object-contain"
                />
            </div> */}
                    <div className="favorite-btn p-2 rounded-lg flex items-center justify-center" onClick={handleLikeClick}>
                        <div className="bg-emerald-600/40 p-2 rounded-full mr-2">
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

                        <p className="text-sm font-semibold text-gray-500">Workout Completed On: <span className="font-semibold pl-2 text-gray-900"> {currentDate}</span></p>
                    </div>

                    {/* <p>Total exercises completed: </p> */}
                    <div className="ml-6 font-bold">
                        <Image
                            src={!open ? '/assets/icons/plus.svg' : '/assets/icons/minus.svg'}
                            alt="open details"
                            width={20}
                            height={20}
                            onClick={() => toggleWorkout()}
                        />
                    </div>

                </div>

                <div>
                    <p>{post.tag}</p>
                    <p>{post.exercise}</p>
                </div>

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

  )
}

export default DashboardCard
