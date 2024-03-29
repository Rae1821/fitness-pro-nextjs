import { FaDumbbell } from "react-icons/fa";
import { Button } from '@components/Button';


const WorkoutCard = ({ post, handleEdit, handleDelete }) => {


const formattedDate = new Date(post.date).toLocaleDateString();

//     const totalLoad = post.exerciseObj.reduce((acc, exer) => {
//          const totalWeight = (exer.weight1 + exer.weight2 + exer.weight3) * exer.reps
//          return acc + totalWeight
// })


  return (

    <div>
    {/* Daisy UI Collapse */}
        <div className="collapse collapse-plus border-b border-b-neutral mb-4 font-display mx-auto md:px-2 w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl bg-base-100 hover:bg-primary rounded-tr-2xl rounded-tl-2xl items-center pt-2">

            <input type="checkbox" className="peer" />

            <div className="collapse-title text-xl peer-checked:bg-primary">
                <div className="grid grid-cols-4 lg:grid-cols-[100px_250px_250px_200px] items-center">
                    <div className="w-9">
                        <p className="bg-slate-200 p-2 rounded-full">
                            <FaDumbbell className="text-primary"/>
                        </p>
                    </div>
                    <div className="flex items-center justify-start">
                        <p className="flex flex-col text-sm md:text-base lg:text-xl font-bold text-slate-900">
                        {post.workoutName}
                        <span className="font-normal text-xs md:text-sm lg:text-lg text-slate-500">Focus</span>
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
                            <span className="font-normal text-xs md:text-sm lg:text-lg text-gray-500">Duration</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="collapse-content bg-base-100 px-0 md:px-4 pt-2 rounded-br-md rounded-bl-md border-b-8 border-l-8 border-r-8 border-primary text-slate-800">

                    <table className="table table-xs table-auto">
                        <thead>
                            <tr className="text-center border-neutral text-xs md:text-sm lg:text-base text-slate-500">
                                <th className="text-left font-bold uppercase text-[11px] tracking-wide">Exercise</th>
                                <th className="font-bold uppercase text-[11px] tracking-wide">Sets</th>
                                <th className="font-bold uppercase text-[11px] tracking-wide">Lbs</th>
                                <th className="font-bold uppercase text-[11px] tracking-wide">R 1</th>
                                <th className="font-bold uppercase text-[11px] tracking-wide">R 2</th>
                                <th className="font-bold uppercase text-[11px] tracking-wide">R 3</th>
                                <th className="font-bold uppercase text-[11px] tracking-wide">Load</th>
                            </tr>
                        </thead>
                        <tbody>
                        {post.exerciseObj.map((exer, index) => (
                            <tr key={index} className=" hover:bg-neutral border-neutral text-center text-xs md:text-md lg:text-lg text-slate-800">
                                <th className="text-left text-sm md:text-base lg:text-lg">{exer.exercise}
                                </th>
                                <td className="text-sm md:text-base lg:text-lg font-bold">{exer.sets}</td>
                                <td className="text-sm md:text-base lg:text-lg font-bold">{exer.weight}</td>
                                <td className="text-sm md:text-base lg:text-lg font-bold">{exer.rep1}</td>
                                <td className="text-sm md:text-base lg:text-lg font-bold">{exer.rep2}</td>
                                <td className="text-sm md:text-base lg:text-lg font-bold">{exer.rep3}</td>
                                <td className="text-sm md:text-base lg:text-lg font-bold">{(exer.rep1 + exer.rep2 + exer.rep3) * exer.weight}</td>

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

export default WorkoutCard
