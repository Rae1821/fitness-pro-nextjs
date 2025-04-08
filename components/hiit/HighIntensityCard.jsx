import { FaBolt } from "react-icons/fa6";
import { Button } from "@components/Button";

const HighIntensityCard = ({ post, handleEdit, handleDelete }) => {
  const formattedDate = new Date(post.date).toLocaleDateString();

  return (
    <div>
      {/* Daisy UI Collapse */}
      <div className="collapse collapse-arrow mx-auto mb-4 w-full rounded-t-2xl border-b border-b-neutral bg-base-100 pt-2 font-display hover:bg-[#F2C335] sm:max-w-2xl md:max-w-3xl md:px-2 lg:max-w-4xl">
        <input type="checkbox" className="peer" />

        <div className="collapse-title text-xl peer-checked:bg-warning">
          <div className="grid grid-cols-4 items-center lg:grid-cols-[100px_250px_250px_200px] ">
            <div className="w-9">
              <p className="rounded-full bg-slate-200 p-2">
                <FaBolt className="text-warning" />
              </p>
            </div>
            <div className="flex items-center justify-start">
              <p className="flex flex-col text-sm font-bold text-slate-900 md:text-base  lg:text-xl">
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
                <span className="text-xs font-normal text-slate-500 md:text-sm lg:text-lg">
                  Duration
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="collapse-content rounded-b-md border-x-8 border-b-8 border-warning bg-base-100 px-0 pt-2 text-slate-800 md:px-4">
          {post.exerciseObj.map((exer, index) => (
            <table
              key={index}
              className="table table-xs table-auto md:table-md lg:table-lg"
            >
              <thead>
                <tr className="border-neutral text-center text-slate-500">
                  <th className="text-[11px] font-bold uppercase tracking-wide">
                    Exercise
                  </th>
                  <th className="text-[11px] font-bold uppercase tracking-wide">
                    Sets
                  </th>
                  <th className="text-[11px] font-bold uppercase tracking-wide">
                    Weight
                  </th>
                  <th className="text-[11px] font-bold uppercase tracking-wide">
                    Rep 1
                  </th>
                  <th className="text-[11px] font-bold uppercase tracking-wide">
                    Rep 2
                  </th>
                  <th className="text-[11px] font-bold uppercase tracking-wide">
                    Rep 3
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-neutral text-center hover:bg-neutral">
                  <th className="w-20 text-sm md:w-40 md:text-base lg:w-full lg:text-base">
                    {exer.exercise}
                  </th>
                  <td className="text-center ">{exer.sets}</td>
                  <td className="text-center">{exer.weight}</td>
                  <td className="text-center">{exer.rep1}</td>
                  <td className="text-center">{exer.rep2}</td>
                  <td className="text-center">{exer.rep3}</td>
                </tr>
              </tbody>
            </table>
          ))}
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

export default HighIntensityCard;
