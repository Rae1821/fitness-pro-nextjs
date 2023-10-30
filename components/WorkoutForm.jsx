import Link from 'next/link';

const WorkoutForm = ({ type, post, setPost, submitting, handleSubmit, handleFormChange }) => {



  return (
    <section className="w-full max-w-full flex-start flex-col px-2 py-8">
        <h1 className="mt-5 text-5xl font-extrabold leading-[1.15] sm:text-6xl text-left pl-4">
            <span>{type} Workout</span>
        </h1>
        <p className="pl-5 text-left max-w-md">{type} and record your custom workout</p>

            <form
                onSubmit={handleSubmit}
                className="mt-10 mx-auto w-full">

                <div className="form-top ">
                    <div className="form-control grid grid-cols-3 gap-4 mb-4">
                        <label>
                            <span className="flex flex-col font-semibold justify-center items-center">Workout Name</span>
                            <input
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
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mx-auto">
                    <label >
                        <span className="flex flex-col font-semibold justify-center items-center">Focus Tag
                        </span>
                            <input
                                value={post.tag}
                                onChange={(e) => setPost({ ...post, tag: e.target.value })}
                                placeholder="#strength"
                                required
                                className="input input-bordered w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0 col-span-2"
                            />
                    </label>
                    <label>
                        <span className="flex flex-col font-bold justify-center items-center">Exercise:</span>
                            <input
                                name='exercise'
                                value={post.exercise}
                                onChange={(e) => setPost({ ...post, exercise: e.target.value })}
                                placeholder="Deadlift"
                                required
                                className="input input-bordered w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0 col-span-2"
                            />
                    </label>
                    {/* # of Sets */}
                    <label className="flex flex-col justify-center items-center">
                        <span className="font-semibold text-base justify-center"># of Sets</span>
                        <input
                            name='sets'
                            value={post.sets}
                            onChange={(e) => setPost({ ...post, sets: e.target.value })}
                            placeholder="3"
                            required
                            className="input input-bordered w-full flex justify-center rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
                        />
                    </label>
                    {/* # of Reps */}
                    <label>
                        <span className="flex flex-col justify-center items-center"># of Reps</span>
                        <input
                            name='reps'
                            value={post.reps}
                            onChange={(e) => setPost({ ...post, reps: e.target.value })}
                            placeholder="12"
                            required
                            className="input input-bordered w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
                        />
                    </label>
                    {/* Set 1 Weight */}
                    <label>
                        <span className="font-semibold text-base">Weight</span>
                        <input
                            name='weight1'
                            value={post.weight1}
                            onChange={(e) => setPost({ ...post, weight1: e.target.value })}
                            placeholder="15"
                            required
                            className="input input-bordered w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
                        />
                    </label>
                    {/* Set 2 Weight */}
                    <label>
                        <span className="font-semibold text-base">Weight</span>
                        <input
                            name='weight2'
                            value={post.weight2}
                            onChange={(e) => setPost({ ...post, weight2: e.target.value })}
                            placeholder="15"
                            required
                            className="input input-bordered w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
                        />
                    </label>
                    {/* Set 3 Weight */}
                    <label>
                        <span className="font-semibold text-base">Set 3 Weight</span>
                        <input
                            name='weight3'
                            value={post.weight3}
                            onChange={(e) => setPost({ ...post, weight3: e.target.value })}
                            placeholder="15"
                            required
                            className="input input-bordered w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
                        />
                    </label>
                </div>

                    {/* Exercise Row
                    {exerciseRow.map((obj, index) => (
                    <div key={index} className="grid grid-cols-7 gap-4 items-center my-8">
                        <label>
                            <span className="font-semibold text-base text-gray-700">Focus Tag
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
                            <span className="font-semibold text-base text-gray-700">Exercise:</span>
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
                        {/* <label>
                            <span className="font-semibold text-base text-gray-700"># of Sets</span>
                            <input
                                name='sets'
                                value={obj.sets}
                                onChange={(event) => handleFormChange(index, event)}
                                placeholder="3"
                                required
                                className="w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
                            />
                        </label> */}
                        {/* # of Reps */}
                        {/* <label>
                            <span className="font-semibold text-base text-gray-700"># of Reps</span>
                            <input
                                name='reps'
                                value={obj.reps}
                                onChange={(event) => handleFormChange(index, event)}
                                placeholder="12"
                                required
                                className="w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
                            />
                        </label> */}
                        {/* Set 1 Weight */}
                        {/* <label>
                            <span className="font-semibold text-base text-gray-700">Weight</span>
                            <input
                                name='weight1'
                                value={obj.weight1}
                                onChange={(event) => handleFormChange(index, event)}
                                placeholder="15"
                                required
                                className="w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
                            />
                        </label> */}
                        {/* Set 2 Weight */}
                        {/* <label>
                            <span className="font-semibold text-base text-gray-700">Weight</span>
                            <input
                                name='weight2'
                                value={obj.weight2}
                                onChange={(event) => handleFormChange(index, event)}
                                placeholder="15"
                                required
                                className="w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
                            />
                        </label> */}
                        {/* Set 3 Weight */}
                        {/* <label>
                            <span className="font-semibold text-base text-gray-700">Set 3 Weight</span>
                            <input
                                name='weight3'
                                value={obj.weight3}
                                onChange={(event) => handleFormChange(index, event)}
                                placeholder="15"
                                required
                                className="w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
                            />
                        </label> */}
                    {/* </div>
                    ))}
                    <button
                    className="bg-amber-500 py-1 px-3 rounded-full"
                    onClick={handleAddExercise}
                    >
                        Add Exercise
                    </button> */}


                <div className="w-full flex justify-end items-center my-8 gap-4">
                    <button
                        disabled={submitting}
                        className="px-5 py-1.5 text-bold rounded-full btn-warning"

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
