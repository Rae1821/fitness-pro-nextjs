import { FaHeartbeat } from "react-icons/fa";
import { Button } from "@components/Button";

const CardioCard = ({ post, handleEdit, handleDelete }) => {
  const formattedDate = new Date(post.date).toLocaleDateString();

  return (
    <div>
      {/* Daisy UI Collapse */}
      <div className="collapse collapse-arrow mx-auto mb-4 w-full max-w-xl items-center rounded-t-2xl border-b border-b-neutral bg-base-100 pt-2 font-display text-base-200 hover:bg-[#fb9678] sm:max-w-2xl md:max-w-3xl md:px-2 lg:max-w-4xl">
        <input type="checkbox" className="peer" />

        <div className="collapse-title text-xl peer-checked:bg-[#fb9678]">
          <div className="grid grid-cols-4 items-center lg:grid-cols-[100px_250px_250px_200px]">
            <div className="w-9">
              <p className="flex items-center justify-center rounded-2xl bg-slate-200">
                <FaHeartbeat className="m-2 text-[#fb9678]" />
              </p>
            </div>
            <div className="flex items-center justify-start">
              <p className="flex flex-col text-xs font-bold text-slate-900 md:text-base lg:text-xl">
                {post.workoutName}
                <span className="text-xs font-normal text-slate-500 md:text-sm lg:text-lg">
                  Activity
                </span>
              </p>
            </div>
            <div>
              <p className="flex flex-col text-xs font-bold text-slate-900 md:text-base lg:text-xl">
                {formattedDate}
                <span className="text-xs font-normal text-slate-500 md:text-sm lg:text-lg">
                  Date
                </span>
              </p>
            </div>
            <div>
              <p className="flex flex-col text-xs font-bold text-slate-900 md:text-base lg:text-xl">
                {post.duration} min.
                <span className="text-xs font-normal text-slate-500 md:text-sm lg:text-lg">
                  Duration
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="collapse-content rounded-b-md border-x-8 border-b-8 border-[#fb9678] bg-base-100 px-0 pt-2 text-slate-800 md:px-4">
          <table className="table table-xs table-auto">
            <thead>
              <tr className="border-neutral text-center text-xs text-slate-500 md:text-sm lg:text-base">
                <th className="text-[11px] font-bold uppercase tracking-wide">
                  Distance
                </th>
                <th className="text-[11px] font-bold uppercase tracking-wide">
                  Speed High
                </th>
                {/* <th className="text-[11px] font-bold uppercase tracking-wide">
                  Speed Low
                </th>
                <th className="text-[11px] font-bold uppercase tracking-wide">
                  # of Intervals
                </th> */}
                <th className="text-[11px] font-bold uppercase tracking-wide">
                  Incline
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-neutral text-center text-slate-800 hover:bg-neutral">
                <td className="text-sm font-bold md:text-base lg:text-lg">
                  {post.distance} mile(s)
                </td>
                <td className="text-sm font-bold md:text-base lg:text-lg">
                  {post.speedHigh}
                </td>
                {/* <td className="text-sm font-bold md:text-base lg:text-lg">
                  {post.speedLow}
                </td>
                <td className="text-sm font-bold md:text-base lg:text-lg">
                  {post.intervals}
                </td> */}
                <td className="text-sm font-bold md:text-base lg:text-lg">
                  {post.incline}
                </td>
              </tr>
            </tbody>
          </table>

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

export default CardioCard;
