import DashboardCard from './DashboardCard';

const Profile = ({ name, data, handleEdit, handleDelete }) => {
  return (
    <section className="w-full min-h-screen p-2 mx-auto max-w-6xl">
      <h1 className="text-5xl my-8 text-left ml-2">
        <span className="font-display font-bold">
          {name} Profile
        </span>
      </h1>


       <div className="mt-24 text-left">
        <h2 className="text-xl text-center mb-4 font-display font-semibold">Completed Workouts</h2>

          <div className="flex justify-center">
            <ul>
              {data.map((post) => (
              <DashboardCard
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


    </section>
  )
}

export default Profile
