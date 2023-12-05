'use client'

//import { useState, useEffect } from 'react'
//import { useSession } from 'next-auth/react';
//import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

import Profile from '@components/Profile'
import CompletedWorkouts from '@components/dashboard/CompletedWorkouts';
//import { useSearchParams } from 'next/navigation';


const MyProfile = ({ post, setPost, handleEdit, handleDelete }) => {
  // const router = useRouter();
  // const { data: session } = useSession();

  const searchParams = useSearchParams();
  const favorite = searchParams.get('post');
  const results = JSON.parse(post);
  console.log(results.post);

  // const [myPosts, setMyPosts] = useState([]);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const response = await fetch(`/api/users/${session?.user.id}/posts`);
  //     const data = await response.json();
  //     console.log(data)
  //     setMyPosts(data);
  //   }

  //   if(session?.user.id) fetchPosts();
  // }, [session?.user.id])


  // const handleEdit = (post) => {
  //   router.push(`/edit-workout?id=${post._id}`);
  // }

  // const handleDelete = async (post) => {
  //   const hasConfirmed = confirm(
  //     "Are you sure you want to delete this workout?"
  //   )
  //   if(hasConfirmed) {
  //     try {
  //       await fetch(`/api/workout/${post._id.toString()}`, {
  //         method: "DELETE",
  //       });

  //       const filteredPosts = myPosts.filter((item) => item._id !== post._id);

  //       setMyPosts(filteredPosts);
  //     } catch(error) {
  //       console.log(error)
  //     }
  //   }
  // };

  console.log(favorite)

  return (
    <>
     {/* <Profile
        name="My"
        desc="Welcome to your personalized profile page"
        data={myPosts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      /> */}

      {/* <div>
        {favorite.map((fav) => <p>{fav}</p>)}
      </div> */}

      {/* <CompletedWorkouts
        post={post}
        setPost={setPost}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        favorite={favorite}
      /> */}

    </>
  )
}

export default MyProfile


