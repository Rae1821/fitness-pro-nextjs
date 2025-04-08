import { FaPeopleGroup } from "react-icons/fa6";
import { Button } from "@components/Button";

const ClassCard = ({ post, handleEdit, handleDelete }) => {
  const formattedDate = new Date(post.date).toLocaleDateString();

  return (
    <div>
      {/* Daisy UI Collapse */}
      <div className="collapse collapse-arrow mx-auto mb-4 w-full rounded-t-2xl border-b border-b-neutral bg-base-100 pt-2 font-display hover:bg-success sm:max-w-2xl md:max-w-3xl md:px-2 lg:max-w-4xl">
        <input type="checkbox" className="peer" />

        <div className="collapse-title text-xl font-medium peer-checked:bg-success">
          <div className="grid grid-cols-4 items-center lg:grid-cols-[75px_250px_250px_200px]">
            <div className="w-9">
              <p className="rounded-full bg-slate-200 p-2">
                <FaPeopleGroup className="text-success" />
              </p>
            </div>
            <div className="flex items-center">
              <p className="flex flex-col text-sm font-bold text-slate-900 md:text-base lg:text-xl">
                {post.workoutName}
                <span className="text-xs font-normal text-slate-500 md:text-sm lg:text-lg">
                  Class
                </span>
              </p>
            </div>
            <p className="flex flex-col text-sm font-bold text-slate-900 md:text-base lg:text-xl">
              {formattedDate}
              <span className="text-xs font-normal text-slate-500 md:text-sm lg:text-lg">
                Date
              </span>
            </p>
            <p className="flex flex-col text-sm font-bold text-slate-900 md:text-base lg:text-xl">
              {post.duration} min.
              <span className="text-xs font-normal text-slate-500 md:text-sm lg:text-lg">
                Duration
              </span>
            </p>
          </div>
        </div>

        <div className="collapse-content rounded-b-md border-8 border-success bg-base-100 px-0 md:px-4">
          <table className="table table-sm table-auto">
            <thead>
              <tr className="border-neutral text-center text-sm text-slate-500">
                <th className="text-[11px] font-bold uppercase tracking-wide">
                  Time
                </th>
                <th className="text-[11px] font-bold uppercase tracking-wide">
                  Class Focus
                </th>
                <th className="text-[11px] font-bold uppercase tracking-wide">
                  Instructor
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-neutral text-center font-bold text-slate-900 hover:bg-neutral">
                <td className="text-sm font-bold md:text-base lg:text-lg">
                  {post.time}
                </td>
                <td className="text-sm font-bold md:text-base lg:text-lg">
                  {post.workoutFocus}
                </td>
                <td className="text-sm font-bold md:text-base lg:text-lg">
                  {post.instructor}
                </td>
              </tr>
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

export default ClassCard;
