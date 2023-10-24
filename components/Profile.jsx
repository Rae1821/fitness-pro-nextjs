import DashboardCard from './DashboardCard';

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className="w-full min-h-screen">
      <h1 className="head_text text-left pl-4">
        <span className="green_gradient">
          {name} Profile
        </span>
      </h1>
      <p className="mt-5 pl-5 text-lg text-gray-600 sm:text-xl text-left">{desc}</p>

      <div className="mt-4 space-y-6 py-8">
        {data.map((post) => (
          <DashboardCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}

          />
        ))}
    </div>


    </section>
  )
}

export default Profile
