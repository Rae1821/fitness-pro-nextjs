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
    <div className='mx-auto px-4 pb-16 pt-10 lg:max-w-[1300px]'>
      <TooltipProvider>
        <div className='absolute right-6 top-24 flex gap-2'>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                asChild
                size='icon'
                className='mb-4 size-10 rounded-full border border-emerald-100 bg-white/80 text-slate-700 shadow-sm backdrop-blur hover:bg-white'
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
                className='mb-4 size-10 rounded-full border border-emerald-100 bg-white/80 text-slate-700 shadow-sm backdrop-blur hover:bg-white'
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
      <div className='mt-20 w-full'>
        <TodaysWorkouts />
        <CompletedWorkouts />
      </div>
    </div>
  );
};

export default MyDashboard;
