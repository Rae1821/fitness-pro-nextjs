'use client' //make this the main client component and store state here

import AppCard from "@components/appWorkout/AppCard"
import CardioCard from "../cardio/CardioCard"
import ClassCard from "../class/ClassCard"
import HighIntensityCard from "../hiit/HighIntensityCard"
import WorkoutCard from "../strength/WorkoutCard"
import Stats from "./Stats"

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";



const CompletedWorkouts = () => {

    const router = useRouter();
    const { data: session } = useSession();

    const [totalPosts, setTotalPosts] = useState([]);
    const [exerciseObjData, setExerciseObjData] = useState('');
    const [selectedTag, setSelectedTag] = useState('all')


   const sortedData = totalPosts.sort((a,b) => new Date(b.date) - new Date(a.date));


  //fetch posts and save to total posts state
  useEffect(() => {
    const fetchPosts = async () => {
    const response = await fetch(`/api/users/${session?.user.id}/posts`);
    const data = await response.json();

    setTotalPosts(data);
    setExerciseObjData(data.map((post) => {
    return post.workoutName
  }));
  }
  if(session?.user.id) fetchPosts();
}, [session?.user.id])

  //edit posts
  const handleEdit = (post) => {
    router.push(`/edit-workout?id=${post._id}`);
  }

  // delete posts
  const handleDelete = async (post) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this workout?"
    )
    if(hasConfirmed) {
      try {
        await fetch(`/api/workout/${post._id.toString()}`, {
          method: "DELETE",
        });

        const filteredPosts = totalPosts.filter((item) => item._id !== post._id);

        setTotalPosts(filteredPosts);
      } catch(error) {
        console.log(error)
      }
    }
  };


  return (
    <div className="flex flex-col items-center justify-center">
        <div className="mt-20 mb-10 mx-auto">
            <Stats data={totalPosts} />
        </div>
        <div className="mt-10 mx-auto">
            <h2 className="text-3xl text-center mb-6">Recent Workouts</h2>

            <div className="flex items-center justify-center mx-auto mb-16">
                <div className="flex gap-2">
                    <button
                        value="all"
                        onClick={(e) => setSelectedTag(e.target.value)}
                        className="btn btn-xs lg:btn-sm btn-primary">
                        All
                    </button>
                    <button
                        value="cardio"
                        onClick={(e) => setSelectedTag(e.target.value)}
                        className="btn btn-xs lg:btn-sm btn-accent">
                        Cardio
                    </button>
                    <button
                        value="class"
                        onClick={(e) => setSelectedTag(e.target.value)}
                        className="btn btn-xs lg:btn-sm btn-success">
                        Class
                    </button>
                    <button
                        value="hiit"
                        onClick={(e) => setSelectedTag(e.target.value)}
                        className="btn btn-xs lg:btn-sm btn-warning">
                        HIIT
                    </button>
                    <button
                        value="strength"
                        onClick={(e) => setSelectedTag(e.target.value)}
                        className="btn btn-xs lg:btn-sm btn-primary">
                        Strength
                    </button>
                    <button
                        value="app"
                        onClick={(e) => setSelectedTag(e.target.value)}
                        className="btn btn-xs lg:btn-sm bg-violet-400 hover:bg-violet-500 outline-0 border-0">
                        App
                    </button>
                </div>
            </div>

            <div className="w-full">
                {sortedData.map((post) => (
                    selectedTag === "app" && post.tag === "app" ?
                    <AppCard
                        key={post._id}
                        post={post}
                        selectedDate={post.selectedDate}
                        handleEdit={() => handleEdit && handleEdit(post)}
                        handleDelete={() => handleDelete && handleDelete(post)}
                    />
                    : selectedTag === "cardio" && post.tag === "cardio" ?
                    <CardioCard
                        key={post._id}
                        post={post}
                        selectedDate={post.selectedDate}
                        handleEdit={() => handleEdit && handleEdit(post)}
                        handleDelete={() => handleDelete && handleDelete(post)}
                    />
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
                            {post.tag === "app" ?
                                <AppCard
                                    key={post._id}
                                    post={post}
                                    selectedDate={post.selectedDate}
                                    handleEdit={() => handleEdit && handleEdit(post)}
                                    handleDelete={() => handleDelete && handleDelete(post)}

                                />
                                : post.tag === "cardio" ?
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
    </div>
  )
}

export default CompletedWorkouts

