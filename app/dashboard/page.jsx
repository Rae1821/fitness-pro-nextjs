import CompletedWorkouts from "@components/dashboard/CompletedWorkouts";
import Image from "@node_modules/next/image";
import Link from "@node_modules/next/link";

const MyDashboard = () => {
  return (
    <div className="bgPattern mx-auto px-4">
      <button
        asChild
        className="absolute right-10 top-20 mb-4 flex size-10 items-center justify-center rounded-full bg-white shadow  hover:bg-success hover:shadow-2xl hover:transition-all"
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
      <div className="w-full">
        <CompletedWorkouts />
      </div>
    </div>
  );
};

export default MyDashboard;
