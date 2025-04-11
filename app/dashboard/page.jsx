import CompletedWorkouts from "@components/dashboard/CompletedWorkouts";
import Image from "@node_modules/next/image";
import Link from "@node_modules/next/link";

const MyDashboard = () => {
  return (
    <div className="bgPattern mx-auto px-4">
      <div
        className="tooltip tooltip-bottom absolute right-10 top-20"
        data-tip="Add Workout"
      >
        <button
          asChild
          className=" mb-4 flex size-10 items-center justify-center rounded-full bg-white shadow  hover:bg-neutral  hover:transition-all"
        >
          <Link href="/create-workout">
            <Image
              src="./assets/icons/plus.svg"
              width={24}
              height={24}
              alt="Add Workout"
            />
          </Link>
        </button>
      </div>
      <div className="w-full">
        <CompletedWorkouts />
      </div>
    </div>
  );
};

export default MyDashboard;
