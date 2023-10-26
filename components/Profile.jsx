import DashboardCard from './DashboardCard';
import SwapToggle from './SwapToggle';

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className="w-full min-h-screen">
      <h1 className="head_text text-left pl-4">
        <span className="green_gradient">
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
