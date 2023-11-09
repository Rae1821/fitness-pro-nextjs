import CardioCard from './CardioCard';
import WorkoutCard from './WorkoutCard';
import ClassCard from './ClassCard';
import HighIntensityCard from './HighIntensityCard';

import Image from 'next/image'




const Profile = ({ name, data, handleEdit, handleDelete }) => {
  return (
    <section className="w-full min-h-screen p-2 mx-auto max-w-7xl">
      <h1 className="text-6xl mt-8 text-center lg:text-left font-display font-bold orange_gradient pb-1">
          {name} <span className="">
          Profile
            </span>
      </h1>
      <p className="text-center text-gray-600 sm:text-xl max-w-2xl lg:text-left ">Find all your completed workouts here</p>

       <div className="mt-24 text-left grid grid-cols-1 gap-10">
          <div className="w-full">
            <h2 className="text-xl text-center mb-4 font-display font-semibold">Completed Strength Workouts</h2>

            <div className="">
              <ul>
                {data.map((post) => (
                  <WorkoutCard
                    key={post._id}
                    post={post}
                    selectedDate={post.selectedDate}
                    handleEdit={() => handleEdit && handleEdit(post)}
                    handleDelete={() => handleDelete && handleDelete(post)}
                  />
                ))}
              </ul>
            </div>
          </div>


          <div className="w-full">
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
