'use client'

import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';



const ClassCard = ({ post, handleEdit, handleDelete }) => {
    const { data: session } = useSession();
    const pathName = usePathname();
    const router = useRouter();


    const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
        month: 'numeric',
        day: 'numeric',
        year: 'numeric',
    });

    const sortedDate = formattedDate.split('/')

    const newSortedDate = sortedDate.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
    })

    console.log()


  return (
    <div>
    {/* Daisy UI Collapse */}
        <div className="collapse collapse-plus border-b border-base-200 font-display md:px-4 shadow-lg bg-neutral max-w-3xl w-full mb-4">

            <input type="checkbox" />

            <div className="collapse-title text-xl font-medium">
                <div className="flex justify-between items-center gap-2">
                <p className="badge badge-outline badge-success">class</p>
                    <div className="flex items-center">
                        <p className="flex flex-col text-xs md:text-sm lg:text-base font-light">
                        Class Name
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
                <table className="table table-sm table-auto">
                    <thead>
                        <tr className="text-center border-neutral">
                            <th></th>
                            <th>Time</th>
                            <th>Class Focus</th>
                            <th>Instructor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover:bg-neutral border-neutral text-center">
                            <td></td>
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