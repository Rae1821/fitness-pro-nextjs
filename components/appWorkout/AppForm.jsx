import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import Link from 'next/link'


const AppForm = ({ type, post, setPost, date, setDate, submitting, handleSubmit }) => {


  return (

    <section className="w-full max-w-full flex-col px-6 py-8">
        <div className="flex flex-col items-center md:items-start">
            <h1 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.5] text-left bg-gradient-to-r from-purple-600 via-violet-500 to-indigo-400 inline-block text-transparent bg-clip-text pb-1">
             App Workout
            </h1>
            <p className="text-left text-sm md:text-base">{type} and record your app workout</p>
        </div>

        <form
            onSubmit={handleSubmit}
            className="mt-10 mx-auto w-full">
            {/* Top of Form */}
            <div className="form-control grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-4 px-8 mb-4 border-b border-slate-300">
                <label>
                    <span className="flex flex-col font-semibold items-center mb-2">Date Completed</span>
                    <div className="flex justify-center w-full relative">
                        <DatePicker
                            selected={date}
                            onChange={(date)=> setDate(date)}
                            className="dark:bg-gray-900 dark:text-white input input-bordered outline-0 text-gray-500 text-sm"
                        />
                    </div>
                </label>
                <label>
                    <span className="flex flex-col font-semibold justify-center items-center">App Name</span>
                    <input
                        type="text"
                        name="workoutName"
                        placeholder="FitOn"
                        value={post.workoutName}
                        onChange={(e) => setPost({ ...post, workoutName: e.target.value })}
                        className="input input-bordered w-full flex rounded-lg mt-2 p-3 text-sm outline-0"
                    />
                </label>
                <label>
                    <span className="flex flex-col font-semibold items-center mb-2">#Tag</span>
                    <p className="input input-bordered w-full flex mt-2 p-3 outline-0">{post.tag}</p>
                </label>
                <label>
                    <span className="flex flex-col font-semibold justify-center items-center">Duration</span>
                    <input
                        type="text"
                        name="duration"
                        placeholder="30"
                        value={post.duration}
                        onChange={(e) => setPost({ ...post, duration: e.target.value })}
                        className="input input-bordered w-full flex rounded-lg mt-2 p-3 text-sm outline-0"
                    />
                </label>
                <label>
                    <span className="flex flex-col font-semibold justify-center items-center">Workout Focus</span>
                    <input
                        type="text"
                        name="workoutFocus"
                        placeholder="Abs"
                        value={post.workoutFocus}
                        onChange={(e) => setPost({ ...post, workoutFocus: e.target.value })}
                        className="input input-bordered w-full flex rounded-lg mt-2 p-3 text-sm  outline-0"
                    />
                </label>
                <label>
                    <span className="flex flex-col font-semibold justify-center items-center">Instructor</span>
                    <input
                        type="text"
                        name="workoutFocus"
                        placeholder="Instructor"
                        value={post.instructor}
                        onChange={(e) => setPost({ ...post, instructor: e.target.value })}
                        className="input input-bordered w-full flex rounded-lg mt-2 p-3 text-sm  outline-0"
                    />
                </label>
            </div>
            <div className="w-full flex justify-center md:justify-end items-center my-8 gap-4">
                        <button
                            disabled={submitting}
                            className="px-5 py-1.5 text-bold btn btn-success btn-sm"

                        >
                            {submitting ? `${type}...` : type}
                        </button>


                        <Link href="/dashboard" className="text-gray-500 text-sm">
                            Cancel
                        </Link>
                    </div>

        </form>
    </section>
  )
}

export default AppForm
