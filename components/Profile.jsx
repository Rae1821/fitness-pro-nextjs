import CardioCard from './cardio/CardioCard';
import WorkoutCard from './strength/WorkoutCard';
import ClassCard from './class/ClassCard';
import HighIntensityCard from './hiit/HighIntensityCard';


const Profile = ({ data, handleEdit, handleDelete }) => {
  return (
    <section className="w-full min-h-screen p-2 mx-auto max-w-7xl">
      <p className="text-gray-600 sm:text-xl max-w-2xl text-left ml-4 ">Find all your completed workouts here</p>

       <div className="mt-24 text-left grid grid-cols-1 gap-10">
          <div className="w-full">
            <h2 className="text-xl text-center mb-4 font-display font-semibold">Completed Strength Workouts</h2>

            <div className="">
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
          </div>

          <div className="w-full">
          {}
            <h2 className="text-xl text-center mb-4 font-display font-semibold">Completed Cardio Workouts</h2>
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
          </div>

          <div>
            <h2 className="text-xl text-center mb-4 font-display font-semibold">Completed Class Workouts</h2>
            <div>
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
          </div>

          <div>
            <h2 className="text-xl text-center mb-4 font-display font-semibold">Completed HIIT Workouts</h2>
              <div>
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
       </div>
    </section>
  )
}

export default Profile
