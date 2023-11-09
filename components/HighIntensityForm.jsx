import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import Link from 'next/link'




const HighIntensityForm = ({ type, post, setPost, selectedDate, setSelectedDate, submitting, handleSubmit, handleClick }) => {




  return (

    <section className="w-full max-w-full flex-start flex-col px-6 py-8">
       <h1 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.5] text-left bg-gradient-to-r from-emerald-600 via-emerald-300 to-orange-500 inline-block text-transparent bg-clip-text pb-1">
            HIIT Workout
        </h1>
        <p className="text-left text-sm md:text-base">{type} and record your HIIT workout</p>


        <form
            onSubmit={handleSubmit}
            className="mt-10 mx-auto w-full">
            {/* Top of Form */}
            <div className="form-control grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-4 mb-4 border-b border-slate-300">
                <label>
                    <span className="flex flex-col font-semibold items-center mb-2">Date Completed</span>
                    <div className="flex justify-center w-full relative">
                        <DatePicker
                            selected={selectedDate}
                            onChange={(date)=> setSelectedDate(date)}
                            className="dark:bg-gray-900 dark:text-white input input-bordered outline-0 text-gray-500 text-sm w-80 sm:w-96 lg:w-72"
                        />
                    </div>
                </label>
                <label>
                    <span className="flex flex-col font-semibold justify-center items-center">Workout Name</span>
                    <input
                        type="text"
                        name="workoutName"
                        placeholder="Arms and Abs"
                        value={post.workoutName}
                        onChange={(e) => setPost({ ...post, workoutName: e.target.value })}
                        className="input input-bordered w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
                    />
                </label>
                <label>
                    <span className="flex flex-col font-semibold items-center mb-2">
                        #Tag
                    </span>
                    <select
                        value={post.tag}
                        onChange={(e) => setPost({...post, tag: e.target.value})} className="select select-bordered select-info w-full"
                    >
                        <option>Pick One</option>
                        <option>Cardio</option>
                        <option>Class</option>
                        <option>HIIT</option>
                        <option>Strength</option>
                    </select>
                </label>
                <label>
                    <span className="flex flex-col font-semibold justify-center items-center">Duration</span>
                    <input
                        type="text"
                        name="duration"
                        placeholder="45"
                        value={post.duration}
                        onChange={(e) => setPost({ ...post, duration: e.target.value })}
                        className="input input-bordered w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
                    />
                </label>
            </div>

            {post.exerciseObj.map((exer, index) => {
                return (
                <div key={index} className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mt-4 border-b border-slate-300 pb-4 ">

                    <label>
                        Exercise:
                        <input
                            type="text"
                            value={exer.exercise}
                            placeholder="Deadlift"
                            name="exercise"
                            onChange={(e) => {
                                const updatedExerciseObj = [...post.exerciseObj];
                                updatedExerciseObj[index].exercise = e.target.value;
                                setPost({ ...post, exerciseObj: updatedExerciseObj });
                            }}
                            className="input input-bordered w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0 col-span-2 shadow-sm"
                        />
                    </label>
                    <label>
                        Sets:
                        <input
                            type="text"
                            value={exer.sets}
                            name="sets"
                            onChange={(e) => {
                                const updatedExerciseObj = [...post.exerciseObj];
                                updatedExerciseObj[index].sets = e.target.value;
                                setPost({ ...post, exerciseObj: updatedExerciseObj });
                            }}
                            className="input input-bordered w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0 col-span-2"
                        />
                    </label>
                    <label>
                        Reps:
                        <input
                            type="text"
                            value={exer.reps}
                            name="reps"
                            onChange={(e) => {
                                const updatedExerciseObj = [...post.exerciseObj];
                                updatedExerciseObj[index].reps = e.target.value;
                                setPost({ ...post, exerciseObj: updatedExerciseObj });
                            }}
                            className="input input-bordered w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0 col-span-2"
                        />
                    </label>
                    <label>
                        Weight 1
                        <input
                            type="text"
                            value={exer.weight1}
                            name="weight1"
                            onChange={(e) => {
                                const updatedExerciseObj = [...post.exerciseObj];
                                updatedExerciseObj[index].weight1 = e.target.value;
                                setPost({ ...post, exerciseObj: updatedExerciseObj });
                            }}
                            className="input input-bordered w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0 col-span-2"
                        />
                    </label>
                    <label>
                        Weight 2
                        <input
                            type="text"
                            value={exer.weight2}
                            name="weight2"
                            onChange={(e) => {
                                const updatedExerciseObj = [...post.exerciseObj];
                                updatedExerciseObj[index].weight2 = e.target.value;
                                setPost({ ...post, exerciseObj: updatedExerciseObj });
                            }}
                            className="input input-bordered w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0 col-span-2"
                        />
                    </label>
                    <label>
                        Weight 3
                        <input
                            type="text"
                            value={exer.weight3}
                            name="weight3"
                            onChange={(e) => {
                                const updatedExerciseObj = [...post.exerciseObj];
                                updatedExerciseObj[index].weight3 = e.target.value;
                                setPost({ ...post, exerciseObj: updatedExerciseObj });
                            }}
                            className="input input-bordered w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0 col-span-2"
                        />
                    </label>
                </div>
                )
            })}


            <button
            className="btn bg-orange-400 hover:bg-orange-300 btn-sm py-1 px-3 mt-4"
            onClick={(e) => handleClick(e)}
            >
                Add Exercise
            </button>


            <div className="w-full flex justify-end items-center my-8 gap-4">
                <button
                    disabled={submitting}
                    className="px-5 py-1.5 text-bold btn btn-success btn-sm"

                >
                    {submitting ? `${type}...` : type}
                </button>


                <Link href="/" className="text-gray-500 text-sm">
                    Cancel
                </Link>
            </div>
        </form>
    </section>
  )
}

export default HighIntensityForm
