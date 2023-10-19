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


    const [liked, setLiked] = useState(false);
    const [currentDate, setCurrentDate] = useState(getDate());

    const [count, setCount] = useState(0)


    const handleLikeClick = () => {
        setLiked(prevSetLiked => !prevSetLiked)
    }

    const totalCount = () => {
        setCount(prevCount => prevCount + 1)
    }

    const [open, setOpen] = useState(false);

    const toggleWorkout = (index) => {
        setOpen(prevOpen => !prevOpen)
    }




  return (


    <div>
        <div className="container grid grid-cols-1 gap-10 glassmorphism">

                <div className="p-4 text-center md:text-left md:pl-4 flex justify-between items-center bg-white/20 w-full">
                    <div className="favorite-btn bg-emerald-600/40 p-2 shadow-sm rounded-lg flex items-center justify-center" onClick={handleLikeClick}>
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
                    <p className="text-sm text-gray-500">Workout Completed On: <span className="font-semibold pl-2 text-gray-900"> {currentDate}</span></p>
                    <p>Total exercises completed: </p>
                    <div >
                        <Image
                            src='/assets/icons/plus.svg'
                            alt="open details"
                            width={20}
                            height={20}
                            onClick={() => toggleWorkout()}
                        />
                    </div>

                </div>
                <ul className="">
                {post.map((row, index) => (
                    <li
                        key={index}
                        className={open ? "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 items-center justify-between gap-10 rounded-lg my-1 p-4 opacity-100 transition-all duration-300 ease-out " : "opacity-0 max-h-0 overflow-y-hidden transition-all duration-300 ease-in"}

                        >

                        <div className="flex flex-col">
                            <p className="font-semibold text-gray-500 text-sm">Tag:</p>
                            <p
                                className="font-inter font-bold text-sm text-gray-900 w-32 cursor-pointer"
                                onClick={() => handleTagClick && handleTagClick(row.tag)}
                            >
                                #{row.tag}
                            </p>
                        </div>
                        <div className="">
                            <p className="font-semibold text-gray-500 text-sm">Exercise:</p>
                            <p className="font-inter font-bold text-sm text-gray-900 w-32">{row.exercise}</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-semibold text-gray-500 text-sm">Sets: </p>
                            <p className="font-inter font-bold text-sm text-gray-900">{row.reps}</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-semibold text-gray-500 text-sm">Reps: </p>
                            <p className="font-inter text-sm text-gray-900">{row.reps}</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-semibold text-gray-500 text-sm">Weight Set 1:</p>
                            <p className="font-inter font-bold text-sm text-gray-900">{row.weight1}lbs</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-semibold text-gray-500 text-sm">Weight Set 2:</p>
                            <p className="font-inter text-sm text-gray-900 w-32">{row.weight2}lbs</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-semibold text-gray-500 text-sm">Weight Set 3:</p>
                            <p className="font-inter font-bold text-sm text-gray-900 w-32">{row.weight3}lbs</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </div>

  )
}

export default DashboardCard
