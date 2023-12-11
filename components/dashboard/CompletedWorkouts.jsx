'use client'

import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react'
import CardioCard from "../cardio/CardioCard"
import ClassCard from "../class/ClassCard"
import HighIntensityCard from "../hiit/HighIntensityCard"
import WorkoutCard from "../strength/WorkoutCard"



const CompletedWorkouts = ({ data, handleEdit, handleDelete }) => {

    const pathName = usePathname();
    const router = useRouter();

    const [selectedTag, setSelectedTag] = useState('all')





   const sortedData = data.sort((a,b) => new Date(b.date) - new Date(a.date));


  return (
    <div className="mt-10 mx-auto">
        <h2 className="text-3xl text-center mb-6">Recent Workouts</h2>

        <div className="flex items-center justify-center mx-auto mb-16">
            <div className="flex gap-2">
                <button
                    value="all"
                    onClick={(e) => setSelectedTag(e.target.value)}
                    className="btn btn-xs btn-primary">
                    All
                </button>
                <button
                    value="cardio"
                    onClick={(e) => setSelectedTag(e.target.value)}
                    className="btn btn-xs btn-accent">
                    Cardio
                </button>
                <button
                    value="class"
                    onClick={(e) => setSelectedTag(e.target.value)}
                    className="btn btn-xs btn-success">
                    Class
                </button>
                <button
                    value="hiit"
                    onClick={(e) => setSelectedTag(e.target.value)}
                    className="btn btn-xs btn-warning">
                    HIIT
                </button>
                <button
                    value="strength"
                    onClick={(e) => setSelectedTag(e.target.value)}
                    className="btn btn-xs btn-primary">
                    Strength
                </button>
            </div>
        </div>

        <div className="w-full">
            {sortedData.map((post) => (
                selectedTag === "cardio" && post.tag === "cardio" ?
                <ul>
                <CardioCard
                    key={post._id}
                    post={post}
                    selectedDate={post.selectedDate}
                    handleEdit={() => handleEdit && handleEdit(post)}
                    handleDelete={() => handleDelete && handleDelete(post)}
                />
                </ul>

                : selectedTag === "class" && post.tag === "class" ?
                <ClassCard
                    key={post._id}
                    post={post}
                    selectedDate={post.selectedDate}
                    handleEdit={() => handleEdit && handleEdit(post)}
                    handleDelete={() => handleDelete && handleDelete(post)}

                />
                : selectedTag === "hiit" && post.tag === "hiit" ?
                    <HighIntensityCard
                        key={post._id}
                        post={post}
                        selectedDate={post.selectedDate}
                        handleEdit={() => handleEdit && handleEdit(post)}
                        handleDelete={() => handleDelete && handleDelete(post)}

                    />
                : selectedTag === "strength" && post.tag === "strength" ?
                    <WorkoutCard
                        key={post._id}
                        post={post}
                        selectedDate={post.selectedDate} //
                        handleEdit={() => handleEdit && handleEdit(post)}
                        handleDelete={() => handleDelete && handleDelete(post)}
                        handleLikeClick={() => handleLikeClick(post)}
                    />
                : selectedTag === "all" ?
                    <div>
                        {post.tag === "cardio" ?
                            <CardioCard
                                key={post._id}
                                post={post}
                                selectedDate={post.selectedDate}
                                handleEdit={() => handleEdit && handleEdit(post)}
                                handleDelete={() => handleDelete && handleDelete(post)}

                            />
                        : post.tag === "class" ?
                            <ClassCard
                                key={post._id}
                                post={post}
                                selectedDate={post.selectedDate}
                                handleEdit={() => handleEdit && handleEdit(post)}
                                handleDelete={() => handleDelete && handleDelete(post)}

                            />
                        : post.tag === "hiit" ?
                            <HighIntensityCard
                                key={post._id}
                                post={post}
                                selectedDate={post.selectedDate}
                                handleEdit={() => handleEdit && handleEdit(post)}
                                handleDelete={() => handleDelete && handleDelete(post)}

                            />
                        : post.tag === "strength" ?
                            <WorkoutCard
                                key={post._id}
                                post={post}
                                selectedDate={post.selectedDate}
                                handleEdit={() => handleEdit && handleEdit(post)}
                                handleDelete={() => handleDelete && handleDelete(post)}

                            />
                        : <div></div>
                        }
                    </div>
                : <div></div>
            ))}
        </div>
    </div>
  )
}

export default CompletedWorkouts


// const handleLikeClick = (post) => {
//     setFavorite((prevFavorite) => {
//         const isFavorite = prevFavorite.includes(post._id);
//         //console.log(post._id)
//         if(isFavorite) {
//             //remove from favorites
//             return prevFavorite.filter((postId) => postId !== post._id)
//         } else {
//             //add to favorites
//             return [...prevFavorite, post._id]
//         }
//     });
// };
