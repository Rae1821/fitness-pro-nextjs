'use client'

import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';


const HighIntensityCard = ({ post, handleEdit, handleDelete, handleLikeClick, favorite }) => {

    const { data: session } = useSession();
    const pathName = usePathname();
    const router = useRouter();

    const formattedDate = new Date(post.date).toLocaleDateString();

  return (
    <div>
    {/* Daisy UI Collapse */}
        <div className="collapse collapse-plus border-b border-base-100 mb-4 font-display md:px-4 w-full shadow-lg bg-neutral max-w-[370px] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
                <div className="flex justify-between items-center gap-2">
                <p className="badge badge-outline badge-warning badge-sm md:badge-md">hiit</p>
                    <div className="flex items-center">
                        <p className="flex flex-col text-xs md:text-sm lg:text-base font-light">
                        Focus
                        <span className="font-semibold lg:text-lg">{post.workoutName}</span>
                        </p>
                    </div>
                    <p className="flex flex-col text-xs md:text-sm lg:text-base row-start-2 font-light">
                    Date
                        <span className="font-bold">{formattedDate}</span>
                    </p>
                    <p className="flex flex-col text-xs md:text-sm lg:text-base font-light">
                        Duration
                        <span className="font-bold">{post.duration} min.</span>
                    </p>
                </div>
            </div>

            <div className="collapse-content bg-base-100 px-0 md:px-4 pt-2 rounded-md">

                {post.exerciseObj.map((exer, index) => (
                    <table key={index} className="table table-xs table-auto md:table-md lg:table-lg">
                        <thead>
                            <tr className="text-center border-neutral">
                                <th></th>
                                <th>Sets</th>
                                <th>Weight</th>
                                <th>Rep 1</th>
                                <th>Rep 2</th>
                                <th>Rep 3</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover:bg-neutral border-neutral text-center">
                                <th className="text-sm md:text-base lg:text-base w-20 md:w-40 lg:w-full">{exer.exercise}
                                </th>
                                <td className="text-center ">{exer.sets}</td>
                                <td className="text-center">{exer.weight}</td>
                                <td className="text-center">{exer.rep1}</td>
                                <td className="text-center">{exer.rep2}</td>
                                <td className="text-center">{exer.rep3}</td>
                            </tr>
                        </tbody>
                    </table>
                ))}


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

export default HighIntensityCard
