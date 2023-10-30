import DashboardCard from './DashboardCard';
import SwapToggle from './SwapToggle';

const Profile = ({ name, data, handleEdit, handleDelete }) => {
  return (
    <section className="w-full min-h-screen p-5">
      <h1 className="text-5xl my-8 text-left">
        <span className="font-display font-bold">
          {name} Profile
        </span>
      </h1>


       <div>
          <ul>
          {data.map((post) => (
          <DashboardCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
          </ul>
       </div>


    </section>
  )
}

export default Profile
