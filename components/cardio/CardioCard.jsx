'use client'


import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import { FaHeartbeat } from "react-icons/fa";



const CardioCard = ({ post, handleEdit, handleDelete, handleLikeClick, favorite }) => {

    const { data: session } = useSession();
    const pathName = usePathname();
    const router = useRouter();

    const formattedDate = new Date(post.date).toLocaleDateString();


  return (
    <div>
    {/* Daisy UI Collapse */}
        <div className="collapse collapse-plus border-b border-neutral-content font-display md:px-4 w-full mb-4 bg-base-100 hover:bg-primary text-info-content sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto">

            <input type="checkbox" />

            <div className="collapse-title text-xl font-medium">
                <div className="flex items-center gap-5 justify-between">
                    <div className='w-8'>
                        {/* <p className="badge badge-outline badge-primary badge-sm md:badge-md">cardio</p> */}
                        <p className="bg-base-100 hover:bg-[#2fc9d7] rounded-2xl flex justify-center items-center">
                            <FaHeartbeat
                                className="text-[#2fc9d7] mx-2 my-2 hover:text-[#F2F2F2]"
                            />
                        </p>
                    </div>
                    <div className="flex items-center">
                        <p className="flex flex-col text-sm md:text-sm lg:text-base font-bold">
                        {post.workoutName}
                        <span className="text-[#D9D9D9] font-regular text-xs">Activity</span>
                        </p>
                    </div>
                    <p className="flex flex-col text-sm md:text-sm lg:text-base row-start-2 font-bold">
                    {formattedDate}
                        <span className="font-regular text-[#D9D9D9]">Date</span>
                    </p>
                    <p className="flex flex-col text-xs md:text-sm lg:text-base font-light">
                        Duration
                        <span className="font-bold">{post.duration} min.</span>
                    </p>

                </div>
            </div>
            <div className="collapse-content bg-[#ffffff]  px-0 md:px-4 pt-2 rounded-md">
                <table className="table table-xs table-auto md:table-sm">
                    <thead>
                        <tr className="text-center border-[#F2F2F2]">
                            <th># of Intervals</th>
                            <th>Speed High</th>
                            <th>Speed Low</th>
                            <th>Incline</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-center hover:bg-[#F2F2F2] border-[#F2F2F2]">
                            <td>{post.intervals}</td>
                            <td>{post.speedHigh}</td>
                            <td>{post.speedLow}</td>
                            <td>{post.incline}</td>
                        </tr>
                    </tbody>
                </table>

                {session?.user.id === post.creator._id
                        && pathName === '/dashboard' && (
                        <div className="mt-5 flex items-center justify-center md:justify-end gap-4 pt-3">
                            <div onClick={handleLikeClick}>
                                <img
                                    src={favorite ? '/assets/icons/star-filled.svg'
                                    : '/assets/icons/star.svg'
                                    }
                                    alt="like btn"
                                    width={20}
                                    height={20}
                                    className="items-center cursor-pointer"
                                />
                            </div>
                            <p
                                className="font-inter text-sm cursor-pointer btn btn-sm btn-outline btn-error"
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
