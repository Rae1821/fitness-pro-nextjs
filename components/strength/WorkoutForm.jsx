import Link from 'next/link'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'


const WorkoutForm = ({ type, post, setPost, date, setDate, submitting, handleSubmit, handleClick }) => {


  return (
    <section className="w-full max-w-full px-6 py-8">
        <div className="flex flex-col items-center md:items-start">
            <h1 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] text-left bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 inline-block text-transparent bg-clip-text pb-1">
                Strength Workout
            </h1>
            <p className="text-sm md:text-base lg:text-left">{type} and record your strength workout</p>
        </div>

        <form
            onSubmit={handleSubmit}
            className="mt-10 mx-auto w-full">
            {/* Top of Form */}
            <div className="form-control grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-4 px-10 mb-4 border-b border-slate-300">
            {/* Date Completed Input */}
                <label>
                    <span className="flex flex-col font-semibold items-center mb-2">Date Completed</span>
                    <div className="flex justify-center w-full">
                        <DatePicker
                            selected={date}
                            onChange={(date)=> setDate(date)}
                            className="input input-bordered outline-0 text-sm"
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
                <div key={index} className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-2 mt-4 border-b border-slate-300 pb-4 items-center px-10">

                    <label className="w-full md:row-start-1 md:col-span-4 lg:row-start-1 lg:col-span-1 font-semibold mb-2 text-center">
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
                            className="input input-bordered w-full flex rounded-lg mt-2 p-3 text-sm outline-0 shadow-sm font-normal"
                        />
                    </label>

                    <label className="md:row-start-2 md:col-span-auto lg:row-start-1 lg:col-span-1 font-semibold mb-2 text-center">
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
                            className="input input-bordered w-full flex rounded-lg mt-2 p-3 text-sm outline-0 font-normal"
                        />
                    </label>
                    <label className="md:row-start-2 md:col-span-2 lg:row-start-1 lg:col-span-1 font-semibold mb-2 text-center">
                        Weight:
                        <input
                            type="text"
                            value={exer.weight}
                            name="reps"
                            onChange={(e) => {
                                const updatedExerciseObj = [...post.exerciseObj];
                                updatedExerciseObj[index].weight = e.target.value;
                                setPost({ ...post, exerciseObj: updatedExerciseObj });
                            }}
                            className="input input-bordered w-full flex rounded-lg mt-2 p-3 text-sm outline-0 col-span-2 font-normal"
                        />
                    </label>
                    <label className="md:row-start-3 md:col-span-1 lg:row-start-1 lg:col-span-1 font-semibold mb-2 text-center">
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
                            className="input input-bordered w-full flex rounded-lg mt-2 p-3 text-sm outline-0 col-span-2 font-normal"
                        />
                    </label>
                    <label className="md:row-start-3 md:col-span-1 lg:row-start-1 lg:col-span-1 font-semibold mb-2 text-center">
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
                            className="input input-bordered w-full flex rounded-lg mt-2 p-3 text-sm outline-0 font-normal"
                        />
                    </label>
                    <label className="md:row-start-3 md:col-span-1 lg:row-start-1 lg:col-span-1 font-semibold mb-2 text-center">
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
                            className="input input-bordered w-full flex rounded-lg mt-2 p-3 text-sm outline-0 font-normal"
                        />
                    </label>
                </div>
                )
            })}

            <button
            className="btn btn-info btn-outline mx-auto w-3/4 lg:w-1/4 mt-4"
            onClick={(e) => handleClick(e)}
            >
                Add Exercise
            </button>

            <div className="w-full flex justify-center md:justify-end items-center mt-12 gap-4">
                <button
                    disabled={submitting}
                    className="text-bold btn btn-success btn-sm"

                >
                    {submitting ? `${type}...` : type}
                </button>


                <Link href="/dashboard" className="text-gray-500 text-sm">
                    Cancel
                </Link>
            </div>
        </form>
    </section>
  )
}

export default WorkoutForm;