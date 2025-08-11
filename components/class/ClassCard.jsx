import { FaPeopleGroup } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

const ClassCard = ({ post, handleEdit, handleDelete }) => {
  const formattedDate = new Date(post.date).toLocaleDateString();

  return (
    <div>
      <Collapsible className='mx-auto mb-4 w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl'>
        <Card className='w-full border-b border-b-neutral-200 bg-white pt-2 font-display hover:bg-green-50 md:px-2'>
          <CollapsibleTrigger className='group w-full'>
            <CardHeader className='w-full pb-2'>
              <div className='grid grid-cols-[50px_auto_auto_auto] items-center lg:grid-cols-[75px_250px_250px_200px]'>
                <div className='w-9'>
                  <p className='rounded-full bg-slate-200 p-2'>
                    <FaPeopleGroup className='text-green-600' />
                  </p>
                </div>
                <div className='flex items-center'>
                  <p className='flex flex-col text-left text-sm font-bold text-slate-900 md:text-base lg:text-xl'>
                    {post.workoutName}
                    <span className='text-xs font-normal text-slate-500 md:text-sm lg:text-lg'>
                      Class
                    </span>
                  </p>
                </div>
                <p className='flex flex-col text-left text-sm font-bold text-slate-900 md:text-base lg:text-xl'>
                  {formattedDate}
                  <span className='text-xs font-normal text-slate-500 md:text-sm lg:text-lg'>
                    Date
                  </span>
                </p>
                <div className='flex items-center justify-between'>
                  <p className='flex flex-col text-left text-sm font-bold text-slate-900 md:text-base lg:text-xl'>
                    {post.duration} min.
                    <span className='text-xs font-normal text-slate-500 md:text-sm lg:text-lg'>
                      Duration
                    </span>
                  </p>
                  <ChevronDown className='size-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180' />
                </div>
              </div>
            </CardHeader>
          </CollapsibleTrigger>

          <CollapsibleContent>
            <CardContent className='rounded-b-md border-8 border-green-600 bg-white px-0 md:px-4'>
              <table className='w-full table-auto border-collapse'>
                <thead>
                  <tr className='border-b border-neutral-200 text-center text-sm text-slate-500'>
                    <th className='text-left text-[11px] font-bold uppercase tracking-wide'>
                      Time
                    </th>
                    <th className='text-left text-[11px] font-bold uppercase tracking-wide'>
                      Class Focus
                    </th>
                    <th className='text-left text-[11px] font-bold uppercase tracking-wide'>
                      Instructor
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-b border-neutral-200 text-center font-bold text-slate-900 hover:bg-neutral-50'>
                    <td className='py-2 text-left text-sm font-bold md:text-base lg:text-lg'>
                      {post.time}
                    </td>
                    <td className='py-2 text-left text-sm font-bold md:text-base lg:text-lg'>
                      {post.workoutFocus}
                    </td>
                    <td className='py-2 text-left text-sm font-bold md:text-base lg:text-lg'>
                      {post.instructor}
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className='mt-5 flex cursor-pointer items-center justify-center gap-4 pt-3 text-sm md:justify-end'>
                <Button variant='destructive' size='sm' onClick={handleEdit}>
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

export default ClassCard;
