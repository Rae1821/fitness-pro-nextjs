import { MdSupervisedUserCircle } from "react-icons/md";


const Card = ({ item }) => {
  return (


    <div className="card lg:card-side bg-neutral shadow-xl">
        <div className="card-body items-center">
        <h2 className="card-title">Total Workouts</h2>
            <div className="flex flex-col gap-5 items-center">
                <span className="text-2xl font-medium">45</span>
                <span className="text-sm font-light">
                <span className="text-lime-500">12%</span>more than previous week
                </span>
            </div>
        </div>
  </div>

  );
};

export default Card;