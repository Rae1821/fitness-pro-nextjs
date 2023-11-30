'use client'

import { useState } from 'react'
import CardioCard from "../cardio/CardioCard"
import ClassCard from "../class/ClassCard"
import HighIntensityCard from "../hiit/HighIntensityCard"
import WorkoutCard from "../strength/WorkoutCard"


const CompletedWorkouts = ({ data, handleEdit, handleDelete, favorite, handleLikeClick }) => {

    const [selectedTag, setSelectedTag] = useState('all')

   const sortedData = data.sort((a,b) => new Date(b.date) - new Date(a.date));


  return (
    <div className="rounded-lg mt-10 mx-auto">
        <h2 className="text-3xl text-center mb-6">Recent Workouts</h2>

        <div className="flex items-center justify-center mx-auto mb-6">
            <div className="flex gap-2">
                <button
                    value="all"
                    onClick={(e) => setSelectedTag(e.target.value)}
                    className="btn btn-xs btn-accent">
                    All
                </button>
                <button
                    value="cardio"
                    onClick={(e) => setSelectedTag(e.target.value)}
                    className="btn btn-xs btn-primary">
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
                        handleLikeClick={() => handleLikeClick && handleLikeClick(post)}
                        favorite={favorite}
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
