import Link from 'next/link'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'


const WorkoutForm = ({ type, post, setPost, selectedDate, setSelectedDate, submitting, handleSubmit, handleClick }) => {



  return (
    <section className="w-full max-w-full flex-start flex-col px-6 py-8">
        <div className="flex flex-col items-center md:items-start">
            <h1 className="mt-8 text-5xl lg:text-6xl font-extrabold leading-[1.15] text-left bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 inline-block text-transparent bg-clip-text pb-1">
                Strength Workout
            </h1>
            <p className="text-sm md:text-base lg:text-left">{type} and record your strength workout</p>
        </div>


        <form
            onSubmit={handleSubmit}
            className="mt-10 mx-auto w-full">
            {/* Top of Form */}
            <div className="form-control grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-4 mb-4 border-b border-slate-300">
            {/* Date Completed Input */}
                <label>
                    <span className="flex flex-col font-semibold items-center mb-2">Date Completed</span>
                    <div className="flex justify-center w-full">
                        <DatePicker
                            selected={selectedDate}
                            onChange={(date)=> setSelectedDate(date)}
                            className="dark:bg-gray-900 dark:text-white input input-bordered outline-0 text-sm w-80 sm:w-96 lg:w-72"
                        />
                    </div>
                </label>
                {/* Workout Focus Input */}
                <label>
                    <span className="flex flex-col font-semibold justify-center items-center">Workout Focus</span>
                    <input
                        type="text"
                        name="workoutName"
                        value={post.workoutName}
                        placeholder="Legs"
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
                        value={post.duration}
                        placeholder="30"
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
                            className="input input-bordered w-full flex rounded-lg mt-2 p-3 text-sm outline-0 col-span-2 shadow-sm"
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
                            className="input input-bordered w-full flex rounded-lg mt-2 p-3 text-smoutline-0 col-span-2"
                        />
                    </label>
                    <label>
                        Weight:
                        <input
                            type="text"
                            value={exer.reps}
                            name="reps"
                            onChange={(e) => {
                                const updatedExerciseObj = [...post.exerciseObj];
                                updatedExerciseObj[index].reps = e.target.value;
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
                            className="input input-bordered w-full flex rounded-lg mt-2 p-3 text-sm outline-0 col-span-2"
                        />
                    </label>
                </div>
                )
            })}

            <button
            className="btn btn-info btn-sm btn-outline py-1 px-3 mt-4"
            onClick={(e) => handleClick(e)}
            >
                Add Exercise
            </button>

            <div className="w-full flex justify-end items-center my-8 gap-4">
                <button
                    disabled={submitting}
                    className="px-5 py-1.5 text-bold btn btn-accent btn-sm"

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

export default WorkoutForm;


 {/* <div className="form-top ">
                    <div className="form-control grid grid-cols-3 gap-4 mb-4">
                        <label>
                            <span className="flex flex-col font-semibold justify-center items-center">Workout Name</span>
                            <input
                                type="text"
                                value={post.name}
                                onChange={(e) => setPost({ ...post, name: e.target.value })}
                                placeholder="Arms"
                                required
                                className="input input-bordered w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0 col-span-2"
                            />
                        </label>
                        <label>
                            <span className="flex flex-col font-semibold justify-center items-center">Date Completed</span>
                            <input
                                type="text"
                                value={post.date}
                                onChange={(e) => setPost({ ...post, date: e.target.value })}
                                placeholder="MM/DD/YYYY"
                                required
                                className="input input-bordered w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0 col-span-2"
                            />
                        </label>
                        <label>
                            <span className="flex flex-col font-semibold justify-center items-center">Duration</span>
                            <input
                                value={post.duration}
                                onChange={(e) => setPost({...post, duration: e.target.value })}
                                placeholder="30 minutes"
                                className="input input-bordered w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
                            />
                        </label>
                    </div>
                </div> */}