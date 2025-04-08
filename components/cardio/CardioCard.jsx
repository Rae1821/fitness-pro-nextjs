import { FaHeartbeat } from "react-icons/fa";
import { Button } from "@components/Button";

const CardioCard = ({ post, handleEdit, handleDelete }) => {
  const formattedDate = new Date(post.date).toLocaleDateString();

  return (
    <div>
      {/* Daisy UI Collapse */}
      <div className="collapse collapse-arrow border-b border-b-neutral font-display md:px-2 w-full bg-base-100 mb-4 text-base-200 sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto items-center hover:bg-accent rounded-tr-2xl rounded-tl-2xl pt-2">
        <input type="checkbox" className="peer" />

        <div className="collapse-title text-xl peer-checked:bg-accent">
          <div className="grid grid-cols-4 lg:grid-cols-[100px_250px_250px_200px] items-center">
            <div className="w-9">
              <p className="bg-slate-200 rounded-2xl flex justify-center items-center">
                <FaHeartbeat className="text-accent mx-2 my-2 hover:text-base-100" />
              </p>
            </div>
            <div className="flex items-center justify-start">
              <p className="flex flex-col text-sm md:text-base lg:text-xl font-bold text-slate-900">
                {post.workoutName}
                <span className="text-slate-500 font-normal text-xs md:text-sm lg:text-lg">
                  Activity
                </span>
              </p>
            </div>
            <div>
              <p className="flex flex-col text-sm md:text-base lg:text-xl font-bold text-slate-900">
                {formattedDate}
                <span className="font-normal text-slate-500 text-xs md:text-sm lg:text-lg">
                  Date
                </span>
              </p>
            </div>
            <div>
              <p className="flex flex-col text-sm md:text-base lg:text-xl font-bold text-slate-900">
                {post.duration} min.
                <span className="font-normal text-slate-500 text-xs md:text-sm lg:text-lg">
                  Duration
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="collapse-content bg-base-100 text-slate-800 px-0 md:px-4 pt-2 rounded-br-md rounded-bl-md border-b-8 border-l-8 border-r-8 border-accent">
          <table className="table table-xs table-auto">
            <thead>
              <tr className="text-center border-neutral text-slate-500 text-xs md:text-sm lg:text-base">
                <th className="font-bold uppercase text-[11px] tracking-wide">
                  Distance
                </th>
                <th className="font-bold uppercase text-[11px] tracking-wide">
                  Speed High
                </th>
                <th className="font-bold uppercase text-[11px] tracking-wide">
                  Speed Low
                </th>
                <th className="font-bold uppercase text-[11px] tracking-wide">
                  # of Intervals
                </th>
                <th className="font-bold uppercase text-[11px] tracking-wide">
                  Incline
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center hover:bg-neutral border-neutral text-slate-800">
                <td className="text-sm md:text-base lg:text-lg font-bold">
                  {post.distance} mile(s)
                </td>
                <td className="text-sm md:text-base lg:text-lg font-bold">
                  {post.speedHigh}
                </td>
                <td className="text-sm md:text-base lg:text-lg font-bold">
                  {post.speedLow}
                </td>
                <td className="text-sm md:text-base lg:text-lg font-bold">
                  {post.intervals}
                </td>
                <td className="text-sm md:text-base lg:text-lg font-bold">
                  {post.incline}
                </td>
              </tr>
            </tbody>
          </table>

          <div className="mt-5 flex items-center justify-center md:justify-end gap-4 pt-3 text-sm cursor-pointer">
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
