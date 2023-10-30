

const WorkoutInput = ({ post, setPost, handleFormChange }) => {


  return (
    <div className="input-group">
        <label>
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
  )
}

export default WorkoutInput
