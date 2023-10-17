import Link from 'next/link';

const WorkoutForm = ({ type, post, setPost, submitting, handleSubmit }) => {


  return (
    <section className="w-full bg-gray-100 max-w-full flex-start flex-col px-2 py-8">
        <h1 className="mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl text-left pl-4">
            <span className="green_gradient">{type} Workout</span>
        </h1>
        <p className="desc pl-5 text-left max-w-md">{type} and record your workout</p>


        <form
            onSubmit={handleSubmit}
            className="bg-gray-50 mt-10 mx-auto w-full glassmorphism">


                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto mb-4">


                </div>

                {/* Group 3 - row of exercise, sets, reps, and weight */}

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-4">
                        {/* Exercise Name */}
                        <label>
                        <span className="font-semibold text-base text-gray-700">Focus Area</span>
                            <input
                                value={post.focus}
                                onChange={(e) => setPost({...post, focus: e.target.value })}
                                placeholder="Strength"
                                required
                                className="w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0 col-span-2"
                            />
                    </label>
                        <label>
                        <span className="font-semibold text-base text-gray-700">Exercise Type</span>
                            <input
                                value={post.exercise}
                                onChange={(e) => setPost({...post,
                                exercise: e.target.value })}
                                placeholder="Deadlift"
                                required
                                className="w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0 col-span-2"
                            />
                    </label>
                     {/* # of Sets */}
                    <label>
                        <span className="font-semibold text-base text-gray-700"># of Sets</span>
                        <input
                            value={post.sets}
                            onChange={(e) => setPost({...post,
                            sets: e.target.value })}
                            placeholder="3"
                            required
                            className="w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
                        />
                    </label>
                     {/* # of Reps */}
                    <label>
                        <span className="font-semibold text-base text-gray-700"># of Reps Per Set</span>
                        <input
                            value={post.reps}
                            onChange={(e) => setPost({...post,
                            reps: e.target.value })}
                            placeholder="12"
                            required
                            className="w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
                        />
                    </label>
                     {/* Set 1 Weight */}
                    <label>
                        <span className="font-semibold text-base text-gray-700">Set 1 Weight</span>
                        <input
                            value={post.weight}
                            onChange={(e) => setPost({...post,
                            weight: e.target.value })}
                            placeholder="15"
                            required
                            className="w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
                        />
                    </label>

                    </div>



                {/* <button
                    type="button"
                    className="bg-orange-500 py-1 px-2 rounded-full text-xs"
                    onClick={handleAddExercise}
                    >
                        <span>Add Exercise</span>
                </button> */}


                <div className="w-full flex justify-end items-center my-8 gap-4">
                    <button
                        type="submit"
                        disabled={submitting}
                        className="px-5 py-1.5 text-sm rounded-full bg-emerald-600 text-white"
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
