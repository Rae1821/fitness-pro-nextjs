import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Link from "next/link";

const CardioForm = ({
  type,
  post,
  setPost,
  date,
  setDate,
  submitting,
  handleSubmit,
}) => {
  return (
    <section className="w-full max-w-full flex-col px-6 py-8">
      <div className="flex flex-col items-center md:items-start">
        <h1 className="mt-8 inline-block bg-gradient-to-r from-red-600 via-rose-500 to-pink-400 bg-clip-text pb-1 text-left text-4xl font-extrabold leading-normal text-transparent md:text-5xl lg:text-6xl">
          Cardio Workout
        </h1>
        <p className="text-left text-sm md:text-base">
          {type} and record your cardio workout
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mx-auto mt-10 w-full">
        {/* Top of Form */}
        <div className="form-control mb-4 grid grid-cols-1 gap-4 border-b border-slate-300 px-8 pb-4 md:grid-cols-2 lg:grid-cols-4">
          <label>
            <span className="mb-2 flex flex-col items-center font-semibold">
              Date Completed
            </span>
            <div className="relative flex w-full justify-center">
              <DatePicker
                selected={date}
                onChange={(date) => setDate(date)}
                className="input input-bordered text-sm text-gray-500 outline-0 dark:bg-gray-900 dark:text-white"
              />
            </div>
          </label>
          <label>
            <span className="flex flex-col items-center justify-center font-semibold">
              Activity Type
            </span>
            <input
              type="text"
              name="workoutName"
              placeholder="Treadmill Run"
              value={post.workoutName}
              onChange={(e) =>
                setPost({ ...post, workoutName: e.target.value })
              }
              className="input input-bordered mt-2 flex w-full rounded-lg p-3 text-sm outline-0"
            />
          </label>
          <label>
            <span className="mb-2 flex flex-col items-center font-semibold">
              #Tag
            </span>
            <p className="input input-bordered mt-2 flex w-full p-3 outline-0">
              {post.tag}
            </p>
          </label>
          <label>
            <span className="flex flex-col items-center justify-center font-semibold">
              Duration
            </span>
            <input
              type="text"
              name="duration"
              placeholder="30"
              value={post.duration}
              onChange={(e) => setPost({ ...post, duration: e.target.value })}
              className="input input-bordered mt-2 flex w-full rounded-lg p-3 text-sm outline-0"
            />
          </label>
          <label>
            <span className="flex flex-col items-center justify-center font-semibold">
              Intervals
            </span>
            <input
              type="text"
              name="intervals"
              placeholder="10"
              value={post.intervals}
              onChange={(e) => setPost({ ...post, intervals: e.target.value })}
              className="input input-bordered mt-2 flex w-full rounded-lg p-3 text-sm outline-0"
            />
          </label>
          <label>
            <span className="flex flex-col items-center justify-center font-semibold">
              Speed High
            </span>
            <input
              type="text"
              name="speedHigh"
              placeholder="6.0"
              value={post.speedHigh}
              onChange={(e) => setPost({ ...post, speedHigh: e.target.value })}
              className="input input-bordered mt-2 flex w-full rounded-lg p-3 text-sm outline-0"
            />
          </label>
          <label>
            <span className="flex flex-col items-center justify-center font-semibold">
              Speed Low
            </span>
            <input
              type="text"
              name="speedLow"
              placeholder="3.0"
              value={post.speedLow}
              onChange={(e) => setPost({ ...post, speedLow: e.target.value })}
              className="input input-bordered mt-2 flex w-full rounded-lg p-3 text-sm  outline-0"
            />
          </label>
          <label>
            <span className="flex flex-col items-center justify-center font-semibold">
              Distance
            </span>
            <input
              type="text"
              name="distance"
              placeholder=".25"
              value={post.distance}
              onChange={(e) => setPost({ ...post, distance: e.target.value })}
              className="input input-bordered mt-2 flex w-full rounded-lg p-3 text-sm outline-0"
            />
          </label>
          <label>
            <span className="flex flex-col items-center justify-center font-semibold">
              Incline
            </span>
            <input
              type="text"
              name="incline"
              placeholder=".25"
              value={post.incline}
              onChange={(e) => setPost({ ...post, incline: e.target.value })}
              className="input input-bordered mt-2 flex w-full rounded-lg p-3 text-sm outline-0"
            />
          </label>
        </div>
        <div className="my-8 flex w-full items-center justify-center gap-4 md:justify-end">
          <button
            disabled={submitting}
            className="btn btn-success btn-sm px-5 py-1.5 font-bold"
          >
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

export default CardioForm;
