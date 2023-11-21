
import MenuLink from "./menuLink/MenuLink";
import { MdBrush, MdDashboard, MdOutlineAccountCircle, MdAutoAwesome } from 'react-icons/md';
import { FaDumbbell } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import Card from "../Card";
import CompletedWorkouts from "../CompletedWorkouts";


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

const Sidebar = () => {
  return (

  <div className="drawer md:drawer-open bg-neutral text-neutral-content">
    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

    <div className="drawer-content flex flex-col items-center justify-center">
      {/* Page content here */}


      {/* <label htmlFor="my-drawer-2" className="btn drawer-button lg:hidden">
        <IoIosArrowForward />
      </label> */}
    </div>

    <div className="drawer-side">
      <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>

      <ul className="menu p-4 w-80 min-h-full text-base-content">
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
  )
}



export default Sidebar
