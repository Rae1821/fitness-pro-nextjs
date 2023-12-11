'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Profile from '@components/profile/Profile'



const MyProfile = () => {
  const router = useRouter();
  const { data: session } = useSession();


  //state for all posts saved from fetch
  const [myPosts, setMyPosts] = useState([]);
  const [count, setCount] = useState({
    cardioCount: 0,
    classCount: 0,
    highIntensityCount: 0,
    strengthCount: 0,
  })


  //fetches post data from database
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();
      //console.log(data)
      setMyPosts(data);
      setCount(data.map((post) => {
         post.tag === "cardio" ? {...count, cardioCount: cardioCount + 1} : post.tag === "class" ? {...count, classCount: classCount + 1} : post.tag === "hiit" ? {...count, highIntensityCount: highIntensityCount + 1} : {...count, strengthCount: strengthCount + 1}
      }))
    }


    if(session?.user.id) fetchPosts();
  }, [session?.user.id])


  // const countWorkoutTags = () => {
  //   myPosts.map((post) => {
  //     if(post.tag === "cardio") {
  //       setCount({
  //         ...count,
  //         cardioCount: cardioCount + 1
  //       })
  //     } else if (post.tag === "class") {
  //       setCount({
  //         ...count,
  //         classCount: count.classCount + 1
  //       })
  //     } else if (post.tag === "hiit") {
  //       setCount({
  //         ...count,
  //         highIntensityCount: count.highIntensityCount + 1
  //       })
  //     } else {
  //       setCount({
  //         ...count,
  //         strengthCount: count.strengthCount + 1
  //       })
  //     }
  //   })
  // }

console.log(count)

  //function to edit post
  const handleEdit = (post) => {
    router.push(`/edit-workout?id=${post._id}`);
  }

  //function to delete post
  const handleDelete = async (post) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this workout?"
    )
    if(hasConfirmed) {
      try {
        await fetch(`/api/workout/${post._id.toString()}`, {
          method: "DELETE",
        });

        const filteredPosts = myPosts.filter((item) => item._id !== post._id);

        setMyPosts(filteredPosts);
      } catch(error) {
        console.log(error)
      }
    }
  };





  return (
    <>
     <Profile
        name="My"
        desc="Welcome to your personalized profile page"
        data={myPosts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </>
  )
}

export default MyProfile


