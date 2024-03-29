import { FaBolt } from "react-icons/fa6";
import { Button } from "@components/Button";


const HighIntensityCard = ({ post, handleEdit, handleDelete }) => {

    const formattedDate = new Date(post.date).toLocaleDateString();

  return (
    <div>
    {/* Daisy UI Collapse */}
        <div className="collapse collapse-plus border-b border-b-neutral mb-4 font-display md:px-2 w-full hover:bg-[#F2C335] bg-base-100 sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto rounded-tl-2xl rounded-tr-2xl pt-2">

            <input type="checkbox" className="peer"/>

            <div className="collapse-title text-xl peer-checked:bg-warning">
                <div className="grid grid-cols-4 lg:grid-cols-[100px_250px_250px_200px] items-center ">
                    <div className="w-9">
                        <p className="bg-slate-200 p-2 rounded-full">
                            <FaBolt className="text-warning"/>
                        </p>
                    </div>
                    <div className="flex items-center justify-start">
                        <p className="flex flex-col text-sm md:text-base lg:text-xl font-bold  text-slate-900">
                        {post.workoutName}
                            <span className="font-normal text-xs md:text-sm lg:text-lg text-slate-500">
                                Focus
                            </span>
                        </p>
                    </div>
                    <div>
                        <p className="flex flex-col text-sm md:text-base lg:text-xl font-bold text-slate-900">
                        {formattedDate}
                            <span className="font-normal text-xs md:text-sm lg:text-lg text-slate-500">Date</span>
                        </p>
                    </div>
                    <div>
                        <p className="flex flex-col text-sm md:text-base lg:text-xl font-bold text-slate-900">
                        {post.duration} min.
                            <span className="font-normal text-xs md:text-sm lg:text-lg text-slate-500">
                                Duration
                            </span>
                        </p>
                    </div>

                </div>
            </div>

            <div className="collapse-content bg-base-100 px-0 md:px-4 pt-2 rounded-bl-md rounded-br-md border-warning border-b-8 border-l-8 border-r-8 text-slate-800">

                {post.exerciseObj.map((exer, index) => (
                    <table key={index} className="table table-xs table-auto md:table-md lg:table-lg">
                        <thead>
                            <tr className="text-center border-neutral text-slate-500">
                                <th className="font-bold uppercase text-[11px] tracking-wide">Exercise</th>
                                <th className="font-bold uppercase text-[11px] tracking-wide">Sets</th>
                                <th className="font-bold uppercase text-[11px] tracking-wide">Weight</th>
                                <th className="font-bold uppercase text-[11px] tracking-wide">Rep 1</th>
                                <th className="font-bold uppercase text-[11px] tracking-wide">Rep 2</th>
                                <th className="font-bold uppercase text-[11px] tracking-wide">Rep 3</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover:bg-neutral border-neutral text-center">
                                <th className="text-sm md:text-base lg:text-base w-20 md:w-40 lg:w-full">{exer.exercise}
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

export default HighIntensityCard
