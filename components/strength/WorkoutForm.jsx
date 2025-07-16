import Link from "next/link";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const WorkoutForm = ({
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
    <section className='w-full max-w-full px-6 py-8'>
      <div className='flex flex-col items-center md:items-start'>
        <h1 className='mt-8 inline-block bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 bg-clip-text pb-1 text-left text-4xl font-extrabold leading-[1.15] text-transparent md:text-5xl lg:text-6xl'>
          Strength Workout
        </h1>
        <p className='text-sm md:text-base lg:text-left'>
          {type} and {type === "Plan" ? "schedule" : "record"} your strength
          workout
        </p>
      </div>

      <form onSubmit={handleSubmit} className='mx-auto mt-10 w-full'>
        {/* Top of Form */}
        <div className='form-control mb-4 grid grid-cols-1 gap-4 border-b border-slate-300 px-10 pb-4 md:grid-cols-2 lg:grid-cols-4'>
          {/* Date Input */}
          <label>
            <span className='mb-2 flex flex-col items-center font-semibold'>
              {type === "Plan" ? "Scheduled Date" : "Date Completed"}
            </span>
            <div className='flex w-full justify-center'>
              <DatePicker
                selected={date}
                onChange={(date) => setDate(date)}
                className='input input-bordered text-sm outline-0'
                minDate={type === "Plan" ? new Date() : undefined}
              />
            </div>
          </label>
          {/* Workout Focus Input */}
          <label>
            <span className='flex flex-col items-center justify-center font-semibold'>
              Workout Focus
            </span>
            <input
              type='text'
              name='workoutName'
              value={post.workoutName}
              placeholder='Legs'
              onChange={(e) =>
                setPost({ ...post, workoutName: e.target.value })
              }
              className='input input-bordered mt-2 flex w-full rounded-lg p-3 text-sm outline-0'
            />
          </label>
          {/* pre-populated tag */}
          <label>
            <span className='mb-2 flex flex-col items-center font-semibold'>
              #Tag
            </span>
            <p className='input input-bordered mt-2 flex w-full p-3 outline-0'>
              {post.tag}
            </p>
          </label>
          {/* Duration Input */}
          <label>
            <span className='flex flex-col items-center justify-center font-semibold'>
              Duration
            </span>
            <input
              type='text'
              name='duration'
              value={post.duration}
              placeholder='30'
              onChange={(e) => setPost({ ...post, duration: e.target.value })}
              className='input input-bordered mt-2 flex w-full rounded-lg p-3 text-sm outline-0'
            />
          </label>
        </div>

        {post.exerciseObj.map((exer, index) => {
          return (
            <div
              key={index}
              className='mt-4 grid grid-cols-1 items-center gap-2 border-b border-slate-300 px-10 pb-4 md:grid-cols-3 lg:grid-cols-6'
            >
              <label className='mb-2 w-full text-center font-semibold md:col-span-4 md:row-start-1 lg:col-span-1 lg:row-start-1'>
                Exercise:
                <input
                  type='text'
                  value={exer.exercise}
                  placeholder='Deadlift'
                  name='exercise'
                  onChange={(e) => {
                    const updatedExerciseObj = [...post.exerciseObj];
                    updatedExerciseObj[index].exercise = e.target.value;
                    setPost({ ...post, exerciseObj: updatedExerciseObj });
                  }}
                  className='input input-bordered mt-2 flex w-full rounded-lg p-3 text-sm font-normal shadow-sm outline-0'
                />
              </label>

              <label className='mb-2 text-center font-semibold md:row-start-2 md:auto-cols-auto lg:col-span-1 lg:row-start-1'>
                Sets:
                <input
                  type='text'
                  value={exer.sets}
                  name='sets'
                  placeholder='0'
                  onChange={(e) => {
                    const updatedExerciseObj = [...post.exerciseObj];
                    updatedExerciseObj[index].sets = e.target.value;
                    setPost({ ...post, exerciseObj: updatedExerciseObj });
                  }}
                  className='input input-bordered mt-2 flex w-full rounded-lg p-3 text-sm font-normal outline-0'
                />
              </label>
              <label className='mb-2 text-center font-semibold md:col-span-2 md:row-start-2 lg:col-span-1 lg:row-start-1'>
                Weight:
                <input
                  type='text'
                  value={exer.weight}
                  name='reps'
                  placeholder='0'
                  onChange={(e) => {
                    const updatedExerciseObj = [...post.exerciseObj];
                    updatedExerciseObj[index].weight = e.target.value;
                    setPost({ ...post, exerciseObj: updatedExerciseObj });
                  }}
                  className='input input-bordered col-span-2 mt-2 flex w-full rounded-lg p-3 text-sm font-normal outline-0'
                />
              </label>
              <label className='mb-2 text-center font-semibold md:col-span-1 md:row-start-3 lg:col-span-1 lg:row-start-1'>
                Rep 1
                <input
                  type='text'
                  value={exer.rep1}
                  name='rep1'
                  placeholder='0'
                  onChange={(e) => {
                    const updatedExerciseObj = [...post.exerciseObj];
                    updatedExerciseObj[index].rep1 = e.target.value;
                    setPost({ ...post, exerciseObj: updatedExerciseObj });
                  }}
                  className='input input-bordered col-span-2 mt-2 flex w-full rounded-lg p-3 text-sm font-normal outline-0'
                />
              </label>
              <label className='mb-2 text-center font-semibold md:col-span-1 md:row-start-3 lg:col-span-1 lg:row-start-1'>
                Rep 2
                <input
                  type='text'
                  value={exer.rep2}
                  name='rep2'
                  placeholder='0'
                  onChange={(e) => {
                    const updatedExerciseObj = [...post.exerciseObj];
                    updatedExerciseObj[index].rep2 = e.target.value;
                    setPost({ ...post, exerciseObj: updatedExerciseObj });
                  }}
                  className='input input-bordered mt-2 flex w-full rounded-lg p-3 text-sm font-normal outline-0'
                />
              </label>
              <label className='mb-2 text-center font-semibold md:col-span-1 md:row-start-3 lg:col-span-1 lg:row-start-1'>
                Rep 3
                <input
                  type='text'
                  value={exer.rep3}
                  name='rep3'
                  placeholder='0'
                  onChange={(e) => {
                    const updatedExerciseObj = [...post.exerciseObj];
                    updatedExerciseObj[index].rep3 = e.target.value;
                    setPost({ ...post, exerciseObj: updatedExerciseObj });
                  }}
                  className='input input-bordered mt-2 flex w-full rounded-lg p-3 text-sm font-normal outline-0'
                />
              </label>
            </div>
          );
        })}

        <div className='mt-4 flex items-center justify-center'>
          <button
            className='btn btn-info btn-outline mx-auto mt-4 w-full lg:w-1/4'
            onClick={(e) => handleClick(e)}
          >
            Add Exercise
          </button>
        </div>

        <div className='mt-12 flex w-full items-center justify-center gap-4 md:justify-end'>
          <button
            disabled={submitting}
            className='btn btn-success btn-sm font-bold'
          >
            {submitting ? `${type}...` : type}
          </button>

          <Link href='/dashboard' className='text-sm text-gray-500'>
            Cancel
          </Link>
        </div>
      </form>
    </section>
  );
};

export default WorkoutForm;
