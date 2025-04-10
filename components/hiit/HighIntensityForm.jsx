import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Link from "next/link";

const HighIntensityForm = ({
  type,
  post,
  setPost,
  date,
  setDate,
  submitting,
  handleSubmit,
  handleClick,
}) => {
  return (
    <section className="w-full max-w-full flex-col px-6 py-8">
      <div className="flex flex-col items-center md:items-start">
        <h1 className="mt-8 inline-block bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-400 bg-clip-text pb-1 text-left text-4xl font-extrabold leading-normal text-transparent md:text-5xl lg:text-6xl">
          HIIT Workout
        </h1>
        <p className="text-left text-sm md:text-base">
          {type} and record your HIIT workout
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mx-auto mt-10 w-full">
        {/* Top of Form */}
        <div className="form-control mb-4 grid grid-cols-1 gap-4 border-b border-slate-300 px-10 pb-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Date Completed Input */}
          <label>
            <span className="mb-2 flex flex-col items-center font-semibold">
              Date Completed
            </span>
            <div className="relative flex w-full justify-center">
              <DatePicker
                selected={date}
                onChange={(date) => setDate(date)}
                className="input input-bordered text-sm outline-0 dark:bg-gray-900 dark:text-white"
              />
            </div>
          </label>
          {/* Workout Name Input */}
          <label>
            <span className="flex flex-col items-center justify-center font-semibold">
              Workout Name
            </span>
            <input
              type="text"
              name="workoutName"
              placeholder="Arms and Abs"
              value={post.workoutName}
              onChange={(e) =>
                setPost({ ...post, workoutName: e.target.value })
              }
              className="input input-bordered mt-2 flex w-full rounded-lg p-3 text-sm outline-0"
            />
          </label>
          {/* pre-populated tag */}
          <label>
            <span className="mb-2 flex flex-col items-center font-semibold">
              #Tag
            </span>
            <p className="input input-bordered mt-2 flex w-full p-3 outline-0">
              {post.tag}
            </p>
          </label>
          {/* Duration Input */}
          <label>
            <span className="flex flex-col items-center justify-center font-semibold">
              Duration
            </span>
            <input
              type="text"
              name="duration"
              placeholder="45"
              value={post.duration}
              onChange={(e) => setPost({ ...post, duration: e.target.value })}
              className="input input-bordered mt-2 flex w-full rounded-lg p-3 text-sm outline-0"
            />
          </label>
        </div>

        {post.exerciseObj.map((exer, index) => {
          return (
            <div
              key={index}
              className="mx-auto mt-4 grid grid-cols-1 gap-4 border-b border-slate-300 px-10 pb-4 text-center md:grid-cols-4 lg:grid-cols-7"
            >
              <label>
                <span className="font-semibold">Exercise:</span>
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
                  className="input input-bordered col-span-2 mt-2 flex w-full rounded-lg p-3  text-sm shadow-sm outline-0"
                />
              </label>
              <label>
                <span className="font-semibold">Sets:</span>
                <input
                  type="text"
                  value={exer.sets}
                  name="sets"
                  onChange={(e) => {
                    const updatedExerciseObj = [...post.exerciseObj];
                    updatedExerciseObj[index].sets = e.target.value;
                    setPost({ ...post, exerciseObj: updatedExerciseObj });
                  }}
                  className="input input-bordered col-span-2 mt-2 flex w-full rounded-lg p-3 text-sm shadow-sm outline-0"
                />
              </label>
              <label>
                <span className="font-semibold">Weight:</span>
                <input
                  type="text"
                  value={exer.weight}
                  name="weight"
                  onChange={(e) => {
                    const updatedExerciseObj = [...post.exerciseObj];
                    updatedExerciseObj[index].weight = e.target.value;
                    setPost({ ...post, exerciseObj: updatedExerciseObj });
                  }}
                  className="input input-bordered col-span-2 mt-2 flex w-full rounded-lg p-3 text-sm outline-0"
                />
              </label>
              <label>
                <span className="font-semibold">Rep 1:</span>
                <input
                  type="text"
                  value={exer.rep1}
                  name="rep1"
                  onChange={(e) => {
                    const updatedExerciseObj = [...post.exerciseObj];
                    updatedExerciseObj[index].rep1 = e.target.value;
                    setPost({ ...post, exerciseObj: updatedExerciseObj });
                  }}
                  className="input input-bordered col-span-2 mt-2 flex w-full rounded-lg p-3 text-sm outline-0"
                />
              </label>
              <label>
                <span className="font-semibold">Rep 2:</span>
                <input
                  type="text"
                  value={exer.rep2}
                  name="rep2"
                  onChange={(e) => {
                    const updatedExerciseObj = [...post.exerciseObj];
                    updatedExerciseObj[index].rep2 = e.target.value;
                    setPost({ ...post, exerciseObj: updatedExerciseObj });
                  }}
                  className="input input-bordered col-span-2 mt-2 flex w-full rounded-lg p-3 text-sm outline-0"
                />
              </label>
              <label>
                <span className="font-semibold">Rep 3:</span>
                <input
                  type="text"
                  value={exer.rep3}
                  name="rep3"
                  onChange={(e) => {
                    const updatedExerciseObj = [...post.exerciseObj];
                    updatedExerciseObj[index].rep3 = e.target.value;
                    setPost({ ...post, exerciseObj: updatedExerciseObj });
                  }}
                  className="input input-bordered col-span-2 mt-2 flex w-full rounded-lg p-3  text-sm outline-0"
                />
              </label>
            </div>
          );
        })}

        <div className="mx-auto w-full px-10">
          <button
            className="btn btn-warning btn-xs mt-4 w-full md:btn-outline lg:w-1/4"
            onClick={(e) => handleClick(e)}
          >
            Add Exercise
          </button>
        </div>

        <div className="mt-12 flex w-full items-center justify-center gap-4 lg:justify-end">
          <button disabled={submitting} className="btn btn-success btn-sm">
            {submitting ? `${type}...` : type}
          </button>

          <Link href="/dashboard" className="text-sm text-gray-500">
            Cancel
          </Link>
        </div>
      </form>
    </section>
  );
};

export default HighIntensityForm;
