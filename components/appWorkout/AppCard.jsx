import { MdOutlinePhoneIphone } from "react-icons/md";
import { Button } from "@components/Button";


const AppCard = ({ post, handleEdit, handleDelete }) => {


const formattedDate = new Date(post.date).toLocaleDateString();


  return (
    <div>
    {/* Daisy UI Collapse */}
        <div className="collapse collapse-plus border-b border-b-neutral font-display md:px-2 w-full mb-4 sm:max-w-2xl md:max-w-3xl lg:max-w-4xl bg-base-100 hover:bg-violet-400 mx-auto rounded-tr-2xl rounded-tl-2xl pt-2">

            <input type="checkbox" className="peer" />

            <div className="collapse-title text-xl font-medium peer-checked:bg-violet-400">
                <div className="grid grid-cols-4 lg:grid-cols-[75px_250px_250px_200px] items-center">
                    <div className="w-9">
                        <p className="bg-slate-200 p-2 rounded-full">
                            <MdOutlinePhoneIphone className="text-violet-400" />
                        </p>
                    </div>
                    <div className="flex items-center">
                        <p className="flex flex-col text-sm md:text-base lg:text-xl font-bold text-slate-900">
                        {post.workoutName}
                        <span className="font-normal text-xs md:text-sm lg:text-lg text-slate-500">Class</span>
                        </p>
                    </div>
                    <p className="flex flex-col text-sm md:text-base lg:text-xl font-bold text-slate-900">
                    {formattedDate}
                        <span className="font-normal text-xs md:text-sm lg:text-lg text-slate-500">Date</span>
                    </p>
                    <p className="flex flex-col text-sm md:text-base lg:text-xl font-bold text-slate-900">
                    {post.duration} min.
                        <span className="font-normal text-xs md:text-sm lg:text-lg text-slate-500">Duration</span>
                    </p>
                </div>
            </div>

            <div className="collapse-content bg-base-100 px-0 md:px-4 rounded-br-md rounded-bl-md border-8 border-violet-400">
                <table className="table table-sm table-auto">
                    <thead>
                        <tr className="border-neutral text-slate-500 text-sm">
                            <th className="font-bold uppercase text-[11px] tracking-wide">Class Focus</th>
                            <th className="font-bold uppercase text-[11px] tracking-wide">Instructor</th>
                        </tr>

                    </thead>
                    <tbody>
                        <tr className="hover:bg-neutral border-neutral text-slate-900 font-bold">
                            <td className="text-sm md:text-base lg:text-lg font-bold">{post.workoutFocus}</td>
                            <td className="text-sm md:text-base lg:text-lg font-bold">{post.instructor}</td>
                        </tr>
                    </tbody>
                </table>
                    <div className="mt-5 flex items-center justify-center md:justify-end gap-4 pt-3 text-sm cursor-pointer">
                        <Button
                            variant="error"
                            className="btn btn-sm"
                            onClick={handleEdit}>
                            Edit
                        </Button>
                        <Button
                            variant="ghost"
                            className="btn btn-sm"
                            onClick={handleDelete}>
                            Delete
                        </Button>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default AppCard
