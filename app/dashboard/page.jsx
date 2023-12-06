"use client"


import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import CompletedWorkouts from "@components/dashboard/CompletedWorkouts";
import Stats from '@components/dashboard/Stats';
//import BarChart from '@components/dashboard/BarChart';


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

  console.log(totalPosts.map((post) => {
    return post.exerciseObj
  }))

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

    <div className="flex flex-col items-center justify-center bg-[#ffffff]">
      <div className="mt-10">
        <Stats />
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

// <div className="drawer lg:drawer-open">
      //<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      //<div className="drawer-content flex flex-col items-center justify-start"> */}
     //Page content here

        // <div className="my-10">
        //   <Stats />
        // </div>
        // <div className="w-full flex justify-center gap-10">
        //   <LineChart
        //     data={totalPosts}
        //     exerciseObjData={exerciseObjData}
        //   />
        //  <BarChart
        //     data={totalPosts}
        //    />
        // </div>

        // <div className="w-full">
        //   <CompletedWorkouts
        //     data={totalPosts}
        //     handleEdit={handleEdit}
        //     handleDelete={handleDelete}
        //   />
        // </div>

        // <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open sidebar</label>
      // </div>

    //     <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

    //   <div className="drawer-side">
    //     <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
    //     <ul className="menu p-4 w-80 min-h-full bg-neutral text-base-content">
    //       {/* Sidebar content here */}
    //       {menuItems.map((cat) => (
    //             <li key={cat.title}>
    //               <span className="text-[var(--textSoft)] font-bold text-[13px] my-3 mx-0">{cat.title}</span>
    //               {cat.list.map((item) => (
    //                 <MenuLink item={item} key={item.title} />
    //               ))}
    //             </li>
    //           ))}
    //     </ul>
    //   </div>
    // </div>