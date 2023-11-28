'use client'

import { useState } from 'react'
import CardioCard from "../cardio/CardioCard"
import ClassCard from "../class/ClassCard"
import HighIntensityCard from "../hiit/HighIntensityCard"
import WorkoutCard from "../strength/WorkoutCard"


const CompletedWorkouts = ({ data, handleEdit, handleDelete}) => {

    const [selectedTag, setSelectedTag] = useState('all')

   const sortedData = data.sort((a,b) => new Date(b.date) - new Date(a.date));

    const handleTagClick = (e) => {
        setSelectedTag(e.target.value)
    }

  return (
    <div className="p-2 rounded-lg mt-10 mx-auto">

        <div className="flex items-center mb-4 justify-between mx-4">
        <h2 className="text-2xl">Recent Workouts</h2>
            <div className="flex gap-5">
                <button
                    value="all"
                    onClick={(e) => setSelectedTag(e.target.value)}
                    className="btn btn-xs">
                    All
                </button>
                <button
                    value="cardio"
                    onClick={(e) => setSelectedTag(e.target.value)}
                    className="btn btn-xs btn-error">
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
                    className="btn btn-xs btn-info">
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
