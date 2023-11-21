import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import Link from 'next/link'




const ClassForm = ({ type, post, setPost, selectedDate, setSelectedDate, submitting, handleSubmit }) => {



  return (

    <section className="w-full max-w-full flex-col px-6 py-8">
        <div className="flex flex-col justify-center items-center md:items-start">
            <h1 className="mt-8 text-5xl lg:text-6xl font-extrabold leading-[1.5] bg-gradient-to-r from-green-600 via-emerald-500 to-teal-400 inline-block text-transparent bg-clip-text pb-1">
                Class Workout
            </h1>
                <p className="text-sm md:text-base">{type} and record your class workout</p>
        </div>

        <form
            onSubmit={handleSubmit}
            className="mt-10 mx-auto w-full">
            {/* Top of Form */}
            <div className="form-control grid grid-cols-1 md:grid-cols-3 gap-4 pb-4 mb-4 border-b border-slate-300">
                <label>
                    <span className="flex flex-col font-semibold items-center mb-2">Date Completed</span>
                    <div className="flex justify-center w-full relative">
                        <DatePicker
                            selected={selectedDate}
                            onChange={(date)=> setSelectedDate(date)}
                            className="input input-bordered outline-0 text-sm w-80 sm:w-96 lg:w-72"
                        />
                    </div>
                </label>
                <label>
                    <span className="flex flex-col font-semibold justify-center items-center">Class Name</span>
                    <input
                        type="text"
                        name="workoutName"
                        placeholder="All Out Athlete"
                        value={post.workoutName}
                        onChange={(e) => setPost({ ...post, workoutName: e.target.value })}
                        className="input input-bordered w-full flex rounded-lg mt-2 p-3 text-sm  outline-0"
                    />
                </label>
            {/* pre-populated tag */}
                <label>
                    <span className="flex flex-col font-semibold items-center mb-2">#Tag</span>
                    <p className="input input-bordered w-full flex mt-2 p-3 outline-0">{post.tag}</p>
                </label>
                {/* Class Time Input */}
                <label>
                    <span className="flex flex-col font-semibold justify-center items-center">
                        Class Time
                    </span>
                    <input
                        type="text"
                        value={post.time}
                        name="time"
                        placeholder="5:30pm"
                        onChange={(e) => setPost({...post, time: e.target.value })}
                        className="input input-bordered w-full flex rounded-lg mt-2 p-3 text-sm  outline-0 col-span-2"
                    />
                </label>
                {/* Duration Input */}
                <label>
                    <span className="flex flex-col font-semibold justify-center items-center">Duration</span>
                    <input
                        type="text"
                        name="duration"
                        placeholder="45"
                        value={post.duration}
                        onChange={(e) => setPost({ ...post, duration: e.target.value })}
                        className="input input-bordered w-full flex rounded-lg mt-2 p-3 text-sm  outline-0"
                    />
                </label>
                {/* Class Focus Input */}
                <label>
                    <span className="flex flex-col font-semibold justify-center items-center">Class Focus</span>
                    <input
                        type="text"
                        name="classType"
                        placeholder="Abs"
                        value={post.workoutFocus}
                        onChange={(e) => setPost({ ...post, workoutFocus: e.target.value })}
                        className="input input-bordered w-full flex rounded-lg mt-2 p-3 text-sm  outline-0"
                    />
                </label>
                {/* Class Instructor Input */}
                <label>
                    <span className="flex flex-col font-semibold justify-center items-center">Instructor</span>
                    <input
                        type="text"
                        name="instructor"
                        placeholder="Rachel"
                        value={post.instructor}
                        onChange={(e) => setPost({ ...post, instructor: e.target.value })}
                        className="input input-bordered w-full flex rounded-lg mt-2 p-3 text-sm  outline-0"
                    />
                </label>
            </div>
            <div className="w-full flex justify-end items-center my-8 gap-4">
                <button
                    disabled={submitting}
                    className="px-5 py-1.5 text-bold btn btn-accent btn-sm"
                >
                    {submitting ? `${type}...` : type}
                </button>

                <Link href="/" className="text-sm">
                    Cancel
                </Link>
            </div>
        </form>
    </section>
  )
}

export default ClassForm
