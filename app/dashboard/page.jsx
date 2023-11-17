"use client"

import MenuLink from '@components/dashboard/sidebar/menuLink/MenuLink';
import { MdBrush, MdDashboard, MdOutlineAccountCircle, MdAutoAwesome } from 'react-icons/md';
import { FaDumbbell } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Card from "@components/dashboard/Card"
import CompletedWorkouts from "@components/dashboard/CompletedWorkouts";
import Stats from '@components/Stats';

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Create Workout",
        path: "/create-workout",
        icon: <MdBrush />,
      },
      {
        title: "My Profile",
        path:  "/profile",
        icon: <MdOutlineAccountCircle />,
      }
    ]
  },
  {
    title: "Workouts",
    list: [
      {
        title: "Total",
        path: "/profile",
        icon: <MdAutoAwesome />
      },
      {
        title: "Strength",
        path: "/strength-workouts",
        icon: <FaDumbbell />,
      },
      {
        title: "Cardio",
        path: "/strength-workouts",
        icon: <FaDumbbell />,
      },
      {
        title: "Class",
        path: "/strength-workouts",
        icon: <FaDumbbell />,
      },
      {
        title: "HIIT",
        path: "/strength-workouts",
        icon: <FaDumbbell />,
      },
    ]
  },
]



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
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col items-center justify-center">
      {/* Page content here */}

        <div>
          <Stats />
          <Card />
        </div>

        <div>
          <CompletedWorkouts
            data={totalPosts}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </div>

        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open sidebar</label>
      </div>

        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-neutral text-base-content">
          {/* Sidebar content here */}
          {menuItems.map((cat) => (
                <li key={cat.title}>
                  <span className="text-[var(--textSoft)] font-bold text-[13px] my-3 mx-0">{cat.title}</span>
                  {cat.list.map((item) => (
                    <MenuLink item={item} key={item.title} />
                  ))}
                </li>
              ))}
        </ul>
      </div>
    </div>

    // <div className="flex">
    //     <div className="flex flex-col gap-5">
    //       <div className="flex flex-col md:flex-row gap-5 justify-between">
    //         {/* <Card />
    //         <Card />
    //         <Card /> */}
    //       </div>
    //       <div>
    //         <CompletedWorkouts
    //           data={totalPosts}
    //           handleEdit={handleEdit}
    //           handleDelete={handleDelete}
    //         />
    //       </div>
    //     </div>
    // </div>



  )
}

export default MyDashboard
