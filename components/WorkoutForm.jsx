import Link from 'next/link';

const WorkoutForm = ({ type, exerciseRow, submitting, handleSubmit, handleFormChange, handleAddExercise }) => {


  return (
    <section className="w-full bg-gray-100 max-w-full flex-start flex-col px-2 py-8">
        <h1 className="mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl text-left pl-4">
            <span className="green_gradient">{type} Workout</span>
        </h1>
        <p className="desc pl-5 text-left max-w-md">{type} and record your custom workout</p>


            <form
                onSubmit={handleSubmit}
                className="bg-gray-50 mt-10 mx-auto w-full glassmorphism">
                {/* Top Row */}
                {/* <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                    {/* Date */}
                    {/* <label>
                        <span className="font-semibold text-base text-gray-700">Date</span>
                            <input
                                value={post.date}
                                onChange={(e) => setPost({...post, date: e.target.value })}
                                placeholder="Strength"
                                required
                                className="w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0 col-span-2"
                            />
                    </label> */}
                    {/* Focus Area */}
                    {/* <label>
                        <span className="font-semibold text-base text-gray-700">Focus Area</span>
                            <input
                                value={post.focus}
                                onChange={(e) => setPost({...post, focus: e.target.value })}
                                placeholder="Strength"
                                required
                                className="w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0 col-span-2"
                            />
                    </label> */}
                    {/* Duration in minutes */}
                    {/* <label>
                        <span className="font-semibold text-base text-gray-700">Duration</span>
                            <input
                                value={post.duration}
                                onChange={(e) => setPost({...post, duration: e.target.value })}
                                placeholder="Strength"
                                required
                                className="w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0 col-span-2"
                            />
                    </label> */}
                {/* </div>  */}

                    {/* Exercise Row Section */}
                    {exerciseRow.map((obj, index) => (
                    <div key={index} className="grid grid-cols-6 gap-4">
                    <label>
                        <span>Workout Focus Tag
                            <span>(strength, cardio, class, etc)</span>
                        </span>
                            <input
                                name='tag'
                                value={obj.tag}
                                onChange={(event) => handleFormChange(index, event)}
                                placeholder="#strength"
                                required
                                className="w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0 col-span-2"
                            />
                    </label>
                        <label>
                            <span className="font-semibold text-base text-gray-700">Exercise Type</span>
                                <input
                                    name='exercise'
                                    value={obj.exercise}
                                    onChange={(event) => handleFormChange(index, event)}
                                    placeholder="Deadlift"
                                    required
                                    className="w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0 col-span-2"
                                />
                        </label>
                        {/* # of Sets */}
                        <label>
                            <span className="font-semibold text-base text-gray-700"># of Sets</span>
                            <input
                                name='sets'
                                value={obj.sets}
                                onChange={(event) => handleFormChange(index, event)}
                                placeholder="3"
                                required
                                className="w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
                            />
                        </label>
                        {/* # of Reps */}
                        <label>
                            <span className="font-semibold text-base text-gray-700"># of Reps Per Set</span>
                            <input
                                name='reps'
                                value={obj.reps}
                                onChange={(event) => handleFormChange(index, event)}
                                placeholder="12"
                                required
                                className="w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
                            />
                        </label>
                        {/* Set 1 Weight */}
                        <label>
                            <span className="font-semibold text-base text-gray-700">Set 1 Weight</span>
                            <input
                                name='weight1'
                                value={obj.weight1}
                                onChange={(event) => handleFormChange(index, event)}
                                placeholder="15"
                                required
                                className="w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
                            />
                        </label>
                        {/* Set 2 Weight */}
                        <label>
                            <span className="font-semibold text-base text-gray-700">Set 2 Weight</span>
                            <input
                                name='weight2'
                                value={obj.weight2}
                                onChange={(event) => handleFormChange(index, event)}
                                placeholder="15"
                                required
                                className="w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
                            />
                        </label>
                        {/* Set 3 Weight */}
                        <label>
                            <span className="font-semibold text-base text-gray-700">Set 3 Weight</span>
                            <input
                                name='weight3'
                                value={obj.weight3}
                                onChange={(event) => handleFormChange(index, event)}
                                placeholder="15"
                                required
                                className="w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
                            />
                        </label>
                    </div>
                    ))}
                    <button onClick={handleAddExercise}>
                        Add Exercise
                    </button>





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
