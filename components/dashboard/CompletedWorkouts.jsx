import CardioCard from "../cardio/CardioCard"
import ClassCard from "../class/ClassCard"
import HighIntensityCard from "../hiit/HighIntensityCard"
import WorkoutCard from "../strength/WorkoutCard"
import Link from "next/link"

const CompletedWorkouts = ({ data, handleEdit, handleDelete}) => {
  return (
    <div className="p-5 rounded-lg mt-5">
        <div className="flex items-start">
            {/* <Search placeholder="Search for a workout..."  /> */}
            <Link href="/create-workout">
                <button className="btn btn-accent btn-sm">New</button>
            </Link>
        </div>
        <div>
            <ul className="flex items-center justify-between max-w-3xl my-2">
                <li>Tag</li>
                <li>Workout Name</li>
                <li>Completed</li>
                <li>Duration</li>
            </ul>
        </div>
        <div>
            <ul>
                {data.map((post) => (
                    post.tag === "cardio" ? (
                        <CardioCard
                            key={post._id}
                            post={post}
                            selectedDate={post.selectedDate}
                            handleEdit={() => handleEdit && handleEdit(post)}
                            handleDelete={() => handleDelete && handleDelete(post)}
                        />
                    ) : null
                ))}
            </ul>
        </div>
        <div>
            <p>Strength Workouts</p>
            <ul>
                {data.map((post) => (
                    post.tag === "strength" ? (
                        <WorkoutCard
                            key={post._id}
                            post={post}
                            selectedDate={post.selectedDate}
                            handleEdit={() => handleEdit && handleEdit(post)}
                            handleDelete={() => handleDelete && handleDelete(post)}
                        />
                    ) : null
                ))}
            </ul>
        </div>
        <div>
            <p>Class Workouts</p>
            <ul>
                {data.map((post) => (
                    post.tag === "class" ? (
                        <ClassCard
                            key={post._id}
                            post={post}
                            selectedDate={post.selectedDate}
                            handleEdit={() => handleEdit && handleEdit(post)}
                            handleDelete={() => handleDelete && handleDelete(post)}
                        />
                    ) : null
                ))}
            </ul>
        </div>
        <div>
            <p>HIIT Workouts</p>
            <ul>
                {data.map((post) => (
                    post.tag === "hiit" ? (
                        <HighIntensityCard
                            key={post._id}
                            post={post}
                            selectedDate={post.selectedDate}
                            handleEdit={() => handleEdit && handleEdit(post)}
                            handleDelete={() => handleDelete && handleDelete(post)}
                        />
                    ) : null
                ))}
            </ul>
        </div>
    </div>
  )
}

export default CompletedWorkouts
