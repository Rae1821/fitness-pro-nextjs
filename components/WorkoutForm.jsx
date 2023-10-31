import Link from 'next/link'

const WorkoutForm = ({ type, post, setPost, submitting, handleSubmit, handleClick }) => {



  return (
    <section className="w-full max-w-full flex-start flex-col px-2 py-8">
        <h1 className="mt-5 text-5xl font-extrabold leading-[1.15] sm:text-6xl text-left pl-4">
            <span>{type} Workout</span>
        </h1>
        <p className="pl-5 text-left max-w-md">{type} and record your custom workout</p>

            <form
                onSubmit={handleSubmit}
                className="mt-10 mx-auto w-full">
                <div className="form-control grid grid-cols-3 gap-4 mb-4">
                <label>
                   Workout Name:
                    <input
                        type="text"
                        name="workoutName"
                        value={post.workoutName}
                        onChange={(e) => setPost({ ...post, workoutName: e.target.value })}
                        className="input input-bordered w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0 col-span-2"
                    />
                </label>
                <label>
                   Date completed:
                    <input
                        type="text"
                        name="date"
                        value={post.date}
                        onChange={(e) => setPost({ ...post, date: e.target.value })}
                        className="input input-bordered w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0 col-span-2"
                    />
                </label>
                <label>
                   Duration:
                    <input
                        type="text"
                        name="duration"
                        value={post.duration}
                        onChange={(e) => setPost({ ...post, duration: e.target.value })}
                        className="input input-bordered w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0 col-span-2"
                    />
                </label>
                </div>

                {post.exerciseObj.map((exer, index) => {
                return (
                <div key={index} className="grid grid-cols-2 gap-4 mt-4">

                    <label>
                        Exercise:
                        <input
                            type="text"
                            value={exer.exercise}
                            name="exercise"
                            onChange={(e) => {
                                const updatedExerciseObj = [...post.exerciseObj];
                                updatedExerciseObj[index].exercise = e.target.value;
                                setPost({ ...post, exerciseObj: updatedExerciseObj });
                            }}
                            className="input input-bordered w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0 col-span-2"
                        />
                    </label>
                    <label>
                        #Tag:
                        <input
                            type="text"
                            value={exer.tag}
                            name="tag"
                            onChange={(e) => {
                                const updatedExerciseObj = [...post.exerciseObj];
                                updatedExerciseObj[index].tag = e.target.value;
                                setPost({ ...post, exerciseObj: updatedExerciseObj });
                            }}
                            className="input input-bordered w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0 col-span-2"

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
                className="bg-amber-500 py-1 px-3 rounded-full mt-4"
                onClick={(e) => handleClick(e)}
                >
                    Add Exercise
                </button>



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