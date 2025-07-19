import { FaDumbbell } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

const WorkoutCard = ({ post, handleEdit, handleDelete }) => {
  const formattedDate = new Date(post.date).toLocaleDateString();

  //     const totalLoad = post.exerciseObj.reduce((acc, exer) => {
  //          const totalWeight = (exer.weight1 + exer.weight2 + exer.weight3) * exer.reps
  //          return acc + totalWeight
  // })

  return (
    <div>
      <Collapsible className='mx-auto mb-4 w-full max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl'>
        <Card className='items-center border-none bg-cyan-600 pt-2 font-display md:px-2'>
          <CollapsibleTrigger className='group w-full'>
            <CardHeader className=''>
              <div className='grid grid-cols-[50px_auto_auto_auto] items-center lg:grid-cols-[100px_250px_250px_200px]'>
                <div className='w-8'>
                  <p className='rounded-full bg-white p-2'>
                    <FaDumbbell className='text-cyan-600' />
                  </p>
                </div>
                <div className='flex items-center justify-start'>
                  <p className='flex flex-col text-left text-xs font-bold md:text-base lg:text-xl'>
                    {post.workoutName}
                    <span className='text-xs font-normal text-secondary-foreground md:text-sm lg:text-lg'>
                      Focus
                    </span>
                  </p>
                </div>
                <div>
                  <p className='flex flex-col text-left text-sm font-bold md:text-base lg:text-xl'>
                    {formattedDate}
                    <span className='text-xs font-normal md:text-sm lg:text-lg'>
                      Date
                    </span>
                  </p>
                </div>
                <div className='flex items-center justify-between'>
                  <p className='flex flex-col text-left text-sm font-bold md:text-base lg:text-xl'>
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
            <CardContent className='rounded-b-md pt-2 md:px-4'>
              <table className='w-full table-auto border-collapse px-4 text-xs md:text-sm lg:text-base'>
                <thead>
                  <tr className='border-b border-neutral-200 text-center'>
                    <th className='text-left text-[11px] font-semibold uppercase tracking-wide'>
                      Exercise
                    </th>
                    <th className='text-center text-[11px] font-semibold uppercase tracking-wide'>
                      Sets
                    </th>
                    <th className='text-center text-[11px] font-semibold uppercase tracking-wide'>
                      Lbs
                    </th>
                    <th className='text-center text-[11px] font-semibold uppercase tracking-wide'>
                      R 1
                    </th>
                    <th className='text-center text-[11px] font-semibold uppercase tracking-wide'>
                      R 2
                    </th>
                    <th className='text-center text-[11px] font-semibold uppercase tracking-wide'>
                      R 3
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {post.exerciseObj.map((exer, index) => (
                    <tr
                      key={index}
                      className='border-b border-neutral-200 text-center text-xs md:text-base lg:text-lg'
                    >
                      <th className='py-1 text-left text-sm md:text-base lg:text-lg'>
                        {exer.exercise}
                      </th>
                      <td className='py-1 text-center text-sm font-bold md:text-base lg:text-lg'>
                        {exer.sets}
                      </td>
                      <td className='py-1 text-center text-sm font-bold md:text-base lg:text-lg'>
                        {exer.weight}
                      </td>
                      <td className='py-1 text-center text-sm font-bold md:text-base lg:text-lg'>
                        {exer.rep1}
                      </td>
                      <td className='py-1 text-center text-sm font-bold md:text-base lg:text-lg'>
                        {exer.rep2}
                      </td>
                      <td className='py-1 text-center text-sm font-semibold md:text-base lg:text-lg'>
                        {exer.rep3}
                      </td>
                    </tr>
                  ))}
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

export default WorkoutCard;
