import Link from 'next/link';

const WorkoutForm = ({ type, post, setPost, submitting, handleSubmit }) => {


  return (
    <section className="w-full bg-gray-100 max-w-full flex-start flex-col px-2 py-8">
        <h1 className="text-3xl font-bold">{type} Workout</h1>
        <p className="text-left max-w-md pt-2 text-gray-600">{type} and record your workout</p>


        <form
            onSubmit={handleSubmit}
            className="bg-gray-50 mt-10 mx-auto w-full glassmorphism">
                {/* Top Row */}
                <div className="grid grid-cols-4 gap-4 mx-auto mb-4">
                    <label>
                        <span className="font-semibold text-base text-gray-700">Today{`'`}s Date</span>
                        <input
                            value={post.date}
                            onChange={(e) => setPost({...post,
                            date: e.target.value })}
                            placeholder="10/5/2023"
                            required
                            className="w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
                        ></input>
                    </label>
                    <label>
                        <span className="font-semibold text-base text-gray-700">Workout Type</span>
                        <input
                            value={post.workoutType}
                            onChange={(e) => setPost({...post,
                            workoutType: e.target.value })}
                            placeholder="strength"
                            required
                            className="w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
                        ></input>
                    </label>
                    <label>
                        <span className="font-semibold text-base text-gray-700">Focus Area</span>
                        <input
                            value={post.workoutFocus}
                            onChange={(e) => setPost({...post,
                            workoutFocus: e.target.value })}
                            placeholder="glutes"
                            required
                            className="w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
                        ></input>
                    </label>
                    <label>
                        <span className="font-semibold text-base text-gray-700">Duration in minutes</span>
                        <input
                            value={post.duration}
                            onChange={(e) => setPost({...post,
                            duration: e.target.value })}
                            placeholder="30"
                            required
                            className="w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
                        ></input>
                    </label>
                </div>
                {/* Row 2 */}
                <div className="mb-4">
                    <label>
                        <span className="font-semibold text-base text-gray-700">Workout Notes</span>
                        <textarea
                            value={post.notes}
                            onChange={(e) => setPost({...post,
                            notes: e.target.value })}
                            placeholder="Record notes about the workout here..."
                            className="w-full flex rounded-lg h-[150px] mt-2 p-3 text-sm text-gray-500 outline-0"
                        />
                    </label>
                </div>
                {/* Row 3 */}
                <div className="grid grid-cols-7 gap-4 mb-4">
                    <label>
                        <span className="font-semibold text-base text-gray-700">Exercise #1</span>
                        <input
                            value={post.exercise}
                            onChange={(e) => setPost({...post,
                            exercise: e.target.value })}
                            placeholder="Deadlift"
                            required
                            className="w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
                        ></input>
                    </label>
                    <label>
                        <span className="font-semibold text-base text-gray-700"># of Sets</span>
                        <input
                            value={post.sets}
                            onChange={(e) => setPost({...post,
                            sets: e.target.value })}
                            placeholder="3"
                            required
                            className="flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
                        ></input>
                    </label>
                    <label>
                        <span className="font-semibold text-base text-gray-700"># of Reps Per Set</span>
                        <input
                            value={post.reps}
                            onChange={(e) => setPost({...post,
                            reps: e.target.value })}
                            placeholder="12"
                            required
                            className="flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
                        ></input>
                    </label>
                    <label>
                        <span className="font-semibold text-base text-gray-700">Set 1 Weight</span>
                        <input
                            value={post.weight}
                            onChange={(e) => setPost({...post,
                            weight: e.target.value })}
                            placeholder="15"
                            required
                            className="w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
                        ></input>
                    </label>
                    <label>
                        <span className="font-semibold text-base text-gray-700">Set 2 Weight</span>
                        <input
                            value={post.weight}
                            onChange={(e) => setPost({...post,
                            weight: e.target.value })}
                            placeholder="15"
                            required
                            className="w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
                        ></input>
                    </label>
                    <label>
                        <span className="font-semibold text-base text-gray-700">Set 3 Weight</span>
                        <input
                            value={post.weight}
                            onChange={(e) => setPost({...post,
                            weight: e.target.value })}
                            placeholder="15"
                            required
                            className="w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
                        ></input>
                    </label>
                    <label>
                        <span className="font-semibold text-base text-gray-700">Set 4 Weight</span>
                        <input
                            value={post.weight}
                            onChange={(e) => setPost({...post,
                            weight: e.target.value })}
                            placeholder="15"
                            required
                            className="w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
                        ></input>
                    </label>
                </div>

                {/* Row 4 */}
                <div className="grid grid-cols-7 gap-4 mb-4">
                    <label>
                        <span className="font-semibold text-base text-gray-700">Exercise #1</span>
                        <input
                            value={post.exercise}
                            onChange={(e) => setPost({...post,
                            exercise: e.target.value })}
                            placeholder="Deadlift"
                            required
                            className="w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
                        ></input>
                    </label>
                    <label>
                        <span className="font-semibold text-base text-gray-700"># of Sets</span>
                        <input
                            value={post.sets}
                            onChange={(e) => setPost({...post,
                            sets: e.target.value })}
                            placeholder="3"
                            required
                            className="flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
                        ></input>
                    </label>
                    <label>
                        <span className="font-semibold text-base text-gray-700"># of Reps Per Set</span>
                        <input
                            value={post.reps}
                            onChange={(e) => setPost({...post,
                            reps: e.target.value })}
                            placeholder="12"
                            required
                            className="flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
                        ></input>
                    </label>
                    <label>
                        <span className="font-semibold text-base text-gray-700">Set 1 Weight</span>
                        <input
                            value={post.weight}
                            onChange={(e) => setPost({...post,
                            weight: e.target.value })}
                            placeholder="15"
                            required
                            className="w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
                        ></input>
                    </label>
                    <label>
                        <span className="font-semibold text-base text-gray-700">Set 2 Weight</span>
                        <input
                            value={post.weight}
                            onChange={(e) => setPost({...post,
                            weight: e.target.value })}
                            placeholder="15"
                            required
                            className="w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
                        ></input>
                    </label>
                    <label>
                        <span className="font-semibold text-base text-gray-700">Set 3 Weight</span>
                        <input
                            value={post.weight}
                            onChange={(e) => setPost({...post,
                            weight: e.target.value })}
                            placeholder="15"
                            required
                            className="w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
                        ></input>
                    </label>
                    <label>
                        <span className="font-semibold text-base text-gray-700">Set 4 Weight</span>
                        <input
                            value={post.weight}
                            onChange={(e) => setPost({...post,
                            weight: e.target.value })}
                            placeholder="15"
                            required
                            className="w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
                        ></input>
                    </label>
                </div>

                {/* Row 5 */}
                <div className="grid grid-cols-7 gap-4 mb-4">
                    <label>
                        <span className="font-semibold text-base text-gray-700">Exercise #1</span>
                        <input
                            value={post.exercise}
                            onChange={(e) => setPost({...post,
                            exercise: e.target.value })}
                            placeholder="Deadlift"
                            required
                            className="w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
                        ></input>
                    </label>
                    <label>
                        <span className="font-semibold text-base text-gray-700"># of Sets</span>
                        <input
                            value={post.sets}
                            onChange={(e) => setPost({...post,
                            sets: e.target.value })}
                            placeholder="3"
                            required
                            className="flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
                        ></input>
                    </label>
                    <label>
                        <span className="font-semibold text-base text-gray-700"># of Reps Per Set</span>
                        <input
                            value={post.reps}
                            onChange={(e) => setPost({...post,
                            reps: e.target.value })}
                            placeholder="12"
                            required
                            className="flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
                        ></input>
                    </label>
                    <label>
                        <span className="font-semibold text-base text-gray-700">Set 1 Weight</span>
                        <input
                            value={post.weight}
                            onChange={(e) => setPost({...post,
                            weight: e.target.value })}
                            placeholder="15"
                            required
                            className="w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
                        ></input>
                    </label>
                    <label>
                        <span className="font-semibold text-base text-gray-700">Set 2 Weight</span>
                        <input
                            value={post.weight}
                            onChange={(e) => setPost({...post,
                            weight: e.target.value })}
                            placeholder="15"
                            required
                            className="w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
                        ></input>
                    </label>
                    <label>
                        <span className="font-semibold text-base text-gray-700">Set 3 Weight</span>
                        <input
                            value={post.weight}
                            onChange={(e) => setPost({...post,
                            weight: e.target.value })}
                            placeholder="15"
                            required
                            className="w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
                        ></input>
                    </label>
                    <label>
                        <span className="font-semibold text-base text-gray-700">Set 4 Weight</span>
                        <input
                            value={post.weight}
                            onChange={(e) => setPost({...post,
                            weight: e.target.value })}
                            placeholder="15"
                            required
                            className="w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
                        ></input>
                    </label>
                </div>
                <div className="w-full flex justify-start items-center my-8 gap-4">
                    <button
                        type="submit"
                        disabled={submitting}
                        className="px-5 py-1.5 text-base rounded-full bg-emerald-600 text-white"
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

export default WorkoutForm
