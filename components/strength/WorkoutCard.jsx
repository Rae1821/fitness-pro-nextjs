import { FaDumbbell } from "react-icons/fa";
import { Button } from "@components/Button";

const WorkoutCard = ({ post, handleEdit, handleDelete }) => {
  const formattedDate = new Date(post.date).toLocaleDateString();

  //     const totalLoad = post.exerciseObj.reduce((acc, exer) => {
  //          const totalWeight = (exer.weight1 + exer.weight2 + exer.weight3) * exer.reps
  //          return acc + totalWeight
  // })

  return (
    <div>
      {/* Daisy UI Collapse */}
      <div className="collapse collapse-arrow mx-auto mb-4 w-full max-w-xl items-center rounded-t-2xl border-b border-b-neutral bg-base-100 pt-2 font-display hover:bg-[#2fc9d7] sm:max-w-2xl md:max-w-3xl md:px-2 lg:max-w-4xl">
        <input type="checkbox" className="peer" />

        <div className="collapse-title text-xl peer-checked:bg-[#2fc9d7]">
          <div className="grid grid-cols-4 items-center lg:grid-cols-[100px_250px_250px_200px]">
            <div className="w-9">
              <p className="rounded-full bg-slate-200 p-2">
                <FaDumbbell className="text-[#2fc9d7]" />
              </p>
            </div>
            <div className="flex items-center justify-start">
              <p className="flex flex-col text-sm font-bold text-slate-900 md:text-base lg:text-xl">
                {post.workoutName}
                <span className="text-xs font-normal text-slate-500 md:text-sm lg:text-lg">
                  Focus
                </span>
              </p>
            </div>
            <div>
              <p className="flex flex-col text-sm font-bold text-slate-900 md:text-base lg:text-xl">
                {formattedDate}
                <span className="text-xs font-normal text-slate-500 md:text-sm lg:text-lg">
                  Date
                </span>
              </p>
            </div>
            <div>
              <p className="flex flex-col text-sm font-bold text-slate-900 md:text-base lg:text-xl">
                {post.duration} min.
                <span className="text-xs font-normal text-gray-500 md:text-sm lg:text-lg">
                  Duration
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="collapse-content rounded-b-md border-x-8 border-b-8 border-[#2fc9d7] bg-base-100 px-0 pt-2 text-slate-800 md:px-4">
          <table className="table table-xs table-auto">
            <thead>
              <tr className="border-neutral text-center text-xs text-slate-500 md:text-sm lg:text-base">
                <th className="text-left text-[11px] font-bold uppercase tracking-wide">
                  Exercise
                </th>
                <th className="text-[11px] font-bold uppercase tracking-wide">
                  Sets
                </th>
                <th className="text-[11px] font-bold uppercase tracking-wide">
                  Lbs
                </th>
                <th className="text-[11px] font-bold uppercase tracking-wide">
                  R 1
                </th>
                <th className="text-[11px] font-bold uppercase tracking-wide">
                  R 2
                </th>
                <th className="text-[11px] font-bold uppercase tracking-wide">
                  R 3
                </th>
              </tr>
            </thead>
            <tbody>
              {post.exerciseObj.map((exer, index) => (
                <tr
                  key={index}
                  className=" border-neutral text-center text-xs text-slate-800 hover:bg-neutral md:text-base lg:text-lg"
                >
                  <th className="text-left text-sm md:text-base lg:text-lg">
                    {exer.exercise}
                  </th>
                  <td className="text-sm font-bold md:text-base lg:text-lg">
                    {exer.sets}
                  </td>
                  <td className="text-sm font-bold md:text-base lg:text-lg">
                    {exer.weight}
                  </td>
                  <td className="text-sm font-bold md:text-base lg:text-lg">
                    {exer.rep1}
                  </td>
                  <td className="text-sm font-bold md:text-base lg:text-lg">
                    {exer.rep2}
                  </td>
                  <td className="text-sm font-bold md:text-base lg:text-lg">
                    {exer.rep3}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* {session?.user.id === post.creator._id
                        && pathName === '/dashboard' && (
                        <div className="mt-5 flex items-center justify-center md:justify-end gap-4 pt-3">
                            <p
                                className="font-inter text-sm cursor-pointer btn btn-sm btn-error"
                                onClick={handleEdit}
                            >
                                Edit
                            </p>
                            <p
                                className="font-inter text-sm cursor-pointer btn btn-ghost btn-sm"
                                onClick={handleDelete}
                            >
                                Delete
                            </p>

                        </div>
                    )} */}
          <div className="mt-5 flex cursor-pointer items-center justify-center gap-4 pt-3 text-sm md:justify-end">
            <Button variant="error" className="btn btn-sm" onClick={handleEdit}>
              Edit
            </Button>
            <Button
              variant="ghost"
              className="btn btn-sm"
              onClick={handleDelete}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutCard;
