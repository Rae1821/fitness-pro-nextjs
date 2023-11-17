import CardioCard from "../cardio/CardioCard"
import ClassCard from "../class/ClassCard"
import HighIntensityCard from "../hiit/HighIntensityCard"
import WorkoutCard from "../strength/WorkoutCard"
import Link from "next/link"

const CompletedWorkouts = ({ data, handleEdit, handleDelete}) => {

    // console.log(data.map((post) => {
    //      post.date.sort((a,b) => {
    //         return new Date(a.date) - new Date(b.date)
    //     })
    // }))

    const dateArr = data.map((post) => {
        return new Date(post.date)
    })


    console.log(dateArr.sort((a,b) =>{
        return new Date(b.date) > new Date(a.date)
    }))

  return (
    <div className="p-5 rounded-lg mt-5">
        <div className="flex items-start">
            {/* <Search placeholder="Search for a workout..."  /> */}
        </div>
        <div>
            <h2 className="text-2xl mb-2">Recent Workouts</h2>
        </div>
        <div>
        {/* Cardio Workouts */}
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
            {/* Strength Workouts */}
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
            {/* Class Workouts */}
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
            {/* HIIT Workouts */}
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
