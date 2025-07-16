import CompletedWorkouts from "@components/dashboard/CompletedWorkouts";
import TodaysWorkouts from "@components/dashboard/TodaysWorkouts";
import Image from "@node_modules/next/image";
import Link from "@node_modules/next/link";

const MyDashboard = () => {
  return (
    <div className='mx-auto max-w-[1300px] px-4' data-theme='abyss'>
      <div className='absolute right-10 top-20 flex gap-2'>
        <div className='tooltip tooltip-bottom' data-tip='View Calendar'>
          <button
            asChild
            className='mb-4 flex size-10 items-center justify-center rounded-full bg-white shadow hover:bg-neutral hover:transition-all'
          >
            <Link href='/calendar'>📅</Link>
          </button>
        </div>
        <div className='tooltip tooltip-bottom' data-tip='Add Workout'>
          <button
            asChild
            className='mb-4 flex size-10 items-center justify-center rounded-full bg-white shadow hover:bg-neutral hover:transition-all'
          >
            <Link href='/create-workout'>
              <Image
                src='./assets/icons/plus.svg'
                width={24}
                height={24}
                alt='Add Workout'
              />
            </Link>
          </button>
        </div>
      </div>
      <div className='mt-24 w-full'>
        <TodaysWorkouts />
        <CompletedWorkouts />
      </div>
    </div>
  );
};

export default MyDashboard;
