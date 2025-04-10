import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Link from "next/link";

const ClassForm = ({
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
      <div className="flex flex-col items-center justify-center md:items-start">
        <h1 className="mt-8 inline-block bg-gradient-to-r from-green-600 via-emerald-500 to-teal-400 bg-clip-text pb-1 text-4xl font-extrabold leading-normal text-transparent md:text-5xl lg:text-6xl">
          Class Workout
        </h1>
        <p className="text-sm md:text-base">
          {type} and record your class workout
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mx-auto mt-10 w-full">
        {/* Top of Form */}
        <div className="form-control mb-4 grid grid-cols-1 gap-4 border-b border-slate-300 px-10 pb-4 md:grid-cols-2 lg:grid-cols-4">
          <label>
            <span className="mb-2 flex flex-col items-center font-semibold">
              Date Completed
            </span>
            <div className="flex w-full justify-center">
              <DatePicker
                selected={date}
                onChange={(date) => setDate(date)}
                className="input input-bordered text-sm outline-0"
              />
            </div>
          </label>
          <label>
            <span className="flex flex-col items-center justify-center font-semibold">
              Class Name
            </span>
            <input
              type="text"
              name="workoutName"
              placeholder="All Out Athlete"
              value={post.workoutName}
              onChange={(e) =>
                setPost({ ...post, workoutName: e.target.value })
              }
              className="input input-bordered mt-2 flex w-full rounded-lg p-3 text-sm  outline-0"
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
          {/* Class Time Input */}
          <label>
            <span className="flex flex-col items-center justify-center font-semibold">
              Class Time
            </span>
            <input
              type="text"
              value={post.time}
              name="time"
              placeholder="5:30pm"
              onChange={(e) => setPost({ ...post, time: e.target.value })}
              className="input input-bordered col-span-2 mt-2 flex w-full rounded-lg p-3  text-sm outline-0"
            />
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
              className="input input-bordered mt-2 flex w-full rounded-lg p-3 text-sm  outline-0"
            />
          </label>
          {/* Class Focus Input */}
          <label>
            <span className="flex flex-col items-center justify-center font-semibold">
              Class Focus
            </span>
            <input
              type="text"
              name="workoutFocus"
              placeholder="Abs"
              value={post.workoutFocus}
              onChange={(e) =>
                setPost({ ...post, workoutFocus: e.target.value })
              }
              className="input input-bordered mt-2 flex w-full rounded-lg p-3 text-sm  outline-0"
            />
          </label>
          {/* Class Instructor Input */}
          <label>
            <span className="flex flex-col items-center justify-center font-semibold">
              Instructor
            </span>
            <input
              type="text"
              name="instructor"
              placeholder="Rachel"
              value={post.instructor}
              onChange={(e) => setPost({ ...post, instructor: e.target.value })}
              className="input input-bordered mt-2 flex w-full rounded-lg p-3 text-sm  outline-0"
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

          <Link href="/dashboard" className="text-sm">
            Cancel
          </Link>
        </div>
      </form>
    </section>
  );
};

export default ClassForm;
