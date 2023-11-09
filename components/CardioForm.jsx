import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import Link from 'next/link'




const CardioForm = ({ type, post, setPost, workoutType, selectedDate, setSelectedDate, submitting, handleSubmit }) => {




  return (

    <section className="w-full max-w-full flex-start flex-col px-6 py-8">
        <h1 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.5] text-left bg-gradient-to-r from-emerald-600 via-emerald-300 to-orange-500 inline-block text-transparent bg-clip-text pb-1">
          Cardio Workout
        </h1>
        <p className="text-left text-sm md:text-base">{type} and record your cardio workout</p>


        <form
            onSubmit={handleSubmit}
            className="mt-10 mx-auto w-full">
            {/* Top of Form */}
            <div className="form-control grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-4 mb-4 border-b border-slate-300">
                <label>
                    <span className="flex flex-col font-semibold items-center mb-2">Date Completed</span>
                    <div className="flex justify-center w-full relative">
                        <DatePicker
                            selected={selectedDate}
                            onChange={(date)=> setSelectedDate(date)}
                            className="dark:bg-gray-900 dark:text-white input input-bordered outline-0 text-gray-500 text-sm w-80 sm:w-96 lg:w-72"
                        />
                    </div>
                </label>
                <label>
                    <span className="flex flex-col font-semibold justify-center items-center">Activity Type</span>
                    <input
                        type="text"
                        name="workoutName"
                        placeholder="Treadmill Run"
                        value={post.workoutName}
                        onChange={(e) => setPost({ ...post, workoutName: e.target.value })}
                        className="input input-bordered w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
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
                        className="input input-bordered w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
                    />
                </label>
                <label>
                    <span className="flex flex-col font-semibold justify-center items-center">Speed</span>
                    <input
                        type="text"
                        name="speed"
                        placeholder="3.0"
                        value={post.speed}
                        onChange={(e) => setPost({ ...post, speed: e.target.value })}
                        className="input input-bordered w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
                    />
                </label>
                <label>
                    <span className="flex flex-col font-semibold justify-center items-center">Incline</span>
                    <input
                        type="text"
                        name="incline"
                        placeholder="5"
                        value={post.incline}
                        onChange={(e) => setPost({ ...post, incline: e.target.value })}
                        className="input input-bordered w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
                    />
                </label>


            </div>
            <div className="w-full flex justify-end items-center my-8 gap-4">
                        <button
                            disabled={submitting}
                            className="px-5 py-1.5 text-bold btn btn-success btn-sm"

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

export default CardioForm
