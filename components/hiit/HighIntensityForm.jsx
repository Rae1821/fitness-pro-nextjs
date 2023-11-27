import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import Link from 'next/link'




const HighIntensityForm = ({ type, post, setPost, selectedDate, setSelectedDate, submitting, handleSubmit, handleClick }) => {



  return (

    <section className="w-full max-w-full flex-col px-6 py-8">
        <div className="flex flex-col items-center md:items-start">
            <h1 className="mt-8 text-5xl lg:text-6xl font-extrabold leading-[1.5] text-left bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-400 inline-block text-transparent bg-clip-text pb-1">
                HIIT Workout
            </h1>
                <p className="text-left text-sm md:text-base">{type} and record your HIIT workout</p>
        </div>


        <form
            onSubmit={handleSubmit}
            className="mt-10 mx-auto w-full">
            {/* Top of Form */}
            <div className="form-control grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-4 mb-4 border-b border-slate-300">
            {/* Date Completed Input */}
                <label>
                    <span className="flex flex-col font-semibold items-center mb-2">Date Completed</span>
                    <div className="flex justify-center w-full relative">
                        <DatePicker
                            selected={selectedDate}
                            onChange={(date)=> setSelectedDate(date)}
                            className="dark:bg-gray-900 dark:text-white input input-bordered outline-0 text-sm w-80 sm:w-96 lg:w-72"
                        />
                    </div>
                </label>
                {/* Workout Name Input */}
                <label>
                    <span className="flex flex-col font-semibold justify-center items-center">Workout Name</span>
                    <input
                        type="text"
                        name="workoutName"
                        placeholder="Arms and Abs"
                        value={post.workoutName}
                        onChange={(e) => setPost({ ...post, workoutName: e.target.value })}
                        className="input input-bordered w-full flex rounded-lg mt-2 p-3 text-sm outline-0"
                    />
                </label>
                {/* pre-populated tag */}
                <label>
                    <span className="flex flex-col font-semibold items-center mb-2">#Tag</span>
                    <p className="input input-bordered w-full flex mt-2 p-3 outline-0">{post.tag}</p>
                </label>
                {/* Duration Input */}
                <label>
                    <span className="flex flex-col font-semibold justify-center items-center">Duration</span>
                    <input
                        type="text"
                        name="duration"
                        placeholder="45"
                        value={post.duration}
                        onChange={(e) => setPost({ ...post, duration: e.target.value })}
                        className="input input-bordered w-full flex rounded-lg mt-2 p-3 text-sm outline-0"
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
                            className="input input-bordered w-full flex rounded-lg mt-2 p-3 text-sm  outline-0 col-span-2 shadow-sm"
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
                            className="input input-bordered w-full flex rounded-lg mt-2 p-3 text-sm outline-0 col-span-2"
                        />
                    </label>
                    <label>
                        Weight:
                        <input
                            type="text"
                            value={exer.weight}
                            name="weight"
                            onChange={(e) => {
                                const updatedExerciseObj = [...post.exerciseObj];
                                updatedExerciseObj[index].weight = e.target.value;
                                setPost({ ...post, exerciseObj: updatedExerciseObj });
                            }}
                            className="input input-bordered w-full flex rounded-lg mt-2 p-3 text-sm outline-0 col-span-2"
                        />
                    </label>
                    <label>
                        Rep 1
                        <input
                            type="text"
                            value={exer.rep1}
                            name="rep1"
                            onChange={(e) => {
                                const updatedExerciseObj = [...post.exerciseObj];
                                updatedExerciseObj[index].rep1 = e.target.value;
                                setPost({ ...post, exerciseObj: updatedExerciseObj });
                            }}
                            className="input input-bordered w-full flex rounded-lg mt-2 p-3 text-sm outline-0 col-span-2"
                        />
                    </label>
                    <label>
                        Rep 2
                        <input
                            type="text"
                            value={exer.rep2}
                            name="rep2"
                            onChange={(e) => {
                                const updatedExerciseObj = [...post.exerciseObj];
                                updatedExerciseObj[index].rep2 = e.target.value;
                                setPost({ ...post, exerciseObj: updatedExerciseObj });
                            }}
                            className="input input-bordered w-full flex rounded-lg mt-2 p-3 text-sm outline-0 col-span-2"
                        />
                    </label>
                    <label>
                        Rep 3
                        <input
                            type="text"
                            value={exer.rep3}
                            name="rep3"
                            onChange={(e) => {
                                const updatedExerciseObj = [...post.exerciseObj];
                                updatedExerciseObj[index].rep3 = e.target.value;
                                setPost({ ...post, exerciseObj: updatedExerciseObj });
                            }}
                            className="input input-bordered w-full flex rounded-lg mt-2 p-3 text-sm  outline-0 col-span-2"
                        />
                    </label>
                </div>
                )
            })}


            <button
            className="btn btn-warning btn-sm py-1 px-3 mt-4"
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


                <Link href="/profile" className="text-gray-500 text-sm">
                    Cancel
                </Link>
            </div>
        </form>
    </section>
  )
}

export default HighIntensityForm
