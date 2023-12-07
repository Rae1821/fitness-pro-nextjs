'use client'


import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { FaPeopleGroup } from "react-icons/fa6";



const ClassCard = ({ post, handleEdit, handleDelete, handleLikeClick, favorite }) => {

    const { data: session } = useSession();
    const pathName = usePathname();

    const formattedDate = new Date(post.date).toLocaleDateString();


  return (
    <div>
    {/* Daisy UI Collapse */}
        <div className="collapse collapse-plus border-b border-b-neutral font-display md:px-2 w-full mb-4 bg-base-100 sm:max-w-2xl md:max-w-3xl lg:max-w-4xl hover:bg-success mx-auto rounded-md">

            <input type="checkbox" className="peer" />

            <div className="collapse-title text-xl font-medium peer-checked:bg-success">
                <div className="grid grid-cols-4 lg:grid-cols-[100px_250px_250px_200px] items-center">
                    <div className="w-9">
                        <p className="bg-slate-200 p-2 rounded-full">
                            <FaPeopleGroup className="text-success" />
                        </p>
                    </div>
                    <div className="flex items-center">
                        <p className="flex flex-col text-sm md:text-base lg:text-xl font-bold text-slate-900">
                        {post.workoutName}
                        <span className="font-normal text-xs md:text-sm lg:text-lg text-slate-300">Class</span>
                        </p>
                    </div>
                    <p className="flex flex-col text-sm md:text-base lg:text-xl font-bold text-slate-900">
                    {formattedDate}
                        <span className="font-normal text-xs md:text-sm lg:text-lg text-slate-300">Date</span>
                    </p>
                    <p className="flex flex-col text-sm md:text-base lg:text-xl font-bold text-slate-900">
                    {post.duration} min.
                        <span className="font-normal text-xs md:text-sm lg:text-lg text-slate-300">Duration</span>
                    </p>
                </div>
            </div>

            <div className="collapse-content bg-base-100 px-0 md:px-4 pt-2 rounded-br-md rounded-bl-md border-8 border-success">
                <table className="table table-sm table-auto">
                    <thead>
                        <tr className="text-center border-neutral text-slate-500 text-sm">
                            <th>Time</th>
                            <th>Class Focus</th>
                            <th>Instructor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover:bg-neutral border-neutral text-center text-slate-900 font-bold">
                            <td>{post.time}</td>
                            <td>{post.workoutFocus}</td>
                            <td>{post.instructor}</td>
                        </tr>
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

export default ClassCard
