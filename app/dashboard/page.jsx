import CompletedWorkouts from "@/components/dashboard/CompletedWorkouts";
import TodaysWorkouts from "@/components/dashboard/TodaysWorkouts";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const MyDashboard = () => {
  return (
    <div className='mx-auto px-4 lg:max-w-[1300px]'>
      <TooltipProvider>
        <div className='absolute right-10 top-20 flex gap-2'>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                asChild
                size='icon'
                className='mb-4 size-10 rounded-full bg-white text-black shadow hover:bg-neutral-100'
              >
                <Link href='/calendar'>📅</Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>View Calendar</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                asChild
                size='icon'
                className='mb-4 size-10 rounded-full bg-white text-black shadow hover:bg-neutral-100'
              >
                <Link href='/create-workout'>
                  <Image
                    src='./assets/icons/plus.svg'
                    width={24}
                    height={24}
                    alt='Add Workout'
                  />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add Workout</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
      <div className='mt-24 w-full'>
        <TodaysWorkouts />
        <CompletedWorkouts />
      </div>
    </div>
  );
};

export default MyDashboard;
