"use client"

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Card from "@components/dashboard/Card"
import CompletedWorkouts from "@components/dashboard/CompletedWorkouts";



const MyDashboard = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [totalPosts, setTotalPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();
      console.log(data)
      setTotalPosts(data);
    }

    if(session?.user.id) fetchPosts();
  }, [session?.user.id])

  const handleEdit = (post) => {
    router.push(`/edit-workout?id=${post._id}`);
  }

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

    <div className="flex">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col md:flex-row gap-5 justify-between">
            <Card />
            <Card />
            <Card />
          </div>
          <div>
            <CompletedWorkouts
              data={totalPosts}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          </div>
        </div>
    </div>



  )
}

export default MyDashboard
