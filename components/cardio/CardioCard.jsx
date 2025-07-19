import { FaHeartbeat } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

const CardioCard = ({ post, handleEdit, handleDelete }) => {
  const formattedDate = new Date(post.date).toLocaleDateString();

  return (
    <div>
      <Collapsible className='mx-auto mb-4 w-full max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl'>
        <Card className='items-center border-none bg-red-400 pt-2 font-display md:px-2'>
          <CollapsibleTrigger className='group w-full'>
            <CardHeader>
              <div className='grid grid-cols-[50px_auto_auto_auto] items-center lg:grid-cols-[100px_250px_250px_200px]'>
                <div className='w-8'>
                  <p className='flex items-center justify-center rounded-2xl bg-white'>
                    <FaHeartbeat className='m-2 text-red-400' />
                  </p>
                </div>
                <div className='flex items-center justify-start'>
                  <p className='flex flex-col text-left text-xs font-bold md:text-base lg:text-xl'>
                    {post.workoutName}
                    <span className='text-xs font-normal md:text-sm lg:text-lg'>
                      Activity
                    </span>
                  </p>
                </div>
                <div>
                  <p className='flex flex-col text-left text-xs font-bold md:text-base lg:text-xl'>
                    {formattedDate}
                    <span className='text-xs font-normal md:text-sm lg:text-lg'>
                      Date
                    </span>
                  </p>
                </div>
                <div className='flex items-center justify-between'>
                  <p className='flex flex-col text-left text-xs font-bold md:text-base lg:text-xl'>
                    {post.duration} min.
                    <span className='text-xs font-normal md:text-sm lg:text-lg'>
                      Duration
                    </span>
                  </p>
                  <ChevronDown className='size-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180' />
                </div>
              </div>
            </CardHeader>
          </CollapsibleTrigger>

          <CollapsibleContent>
            <CardContent className='rounded-b-md md:px-4'>
              <table className='w-full table-auto border-collapse text-xs md:text-sm lg:text-base'>
                <thead>
                  <tr className='border-b text-center'>
                    <th className='text-left text-[11px] font-bold uppercase tracking-wide'>
                      Distance
                    </th>
                    <th className='text-left text-[11px] font-bold uppercase tracking-wide'>
                      Speed High
                    </th>
                    <th className='text-left text-[11px] font-bold uppercase tracking-wide'>
                      Incline
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-b text-center'>
                    <td className='py-2 text-left text-sm font-bold md:text-base lg:text-lg'>
                      {post.distance} mile(s)
                    </td>
                    <td className='py-2 text-left text-sm font-bold md:text-base lg:text-lg'>
                      {post.speedHigh}
                    </td>
                    <td className='py-2 text-left text-sm font-bold md:text-base lg:text-lg'>
                      {post.incline}
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className='mt-5 flex cursor-pointer items-center justify-center gap-4 pt-3 text-sm md:justify-end'>
                <Button size='sm' onClick={handleEdit}>
                  Edit
                </Button>
                <Button variant='ghost' size='sm' onClick={handleDelete}>
                  Delete
                </Button>
              </div>
            </CardContent>
          </CollapsibleContent>
        </Card>
      </Collapsible>
    </div>
  );
};

export default CardioCard;
