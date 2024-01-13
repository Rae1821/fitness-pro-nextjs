"use client"

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import CompletedWorkouts from "@components/dashboard/CompletedWorkouts";
import Stats from '@components/dashboard/Stats';



const MyDashboard = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [totalPosts, setTotalPosts] = useState([]);
  const [exerciseObjData, setExerciseObjData] = useState('');


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

  // console.log(totalPosts.map((post) => {
  //   return post.exerciseObj
  // }))

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

    <div className="flex flex-col items-center justify-center max-w-screen lg:max-w-4xl mx-auto">

      <div className="mt-20 mb-10">

        <Stats
            data={totalPosts}
          />


      </div>
      <div className="w-full">
          <CompletedWorkouts
            data={totalPosts}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
      </div>

    </div>

  )
}

export default MyDashboard
