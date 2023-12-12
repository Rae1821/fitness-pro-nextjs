
import BarChart from './BarChart';

const Profile = ({ name, desc, data }) => {



  return (
    <section className="w-full min-h-screen p-2 mx-auto max-w-7xl">
      <h2 className="mt-8 text-5xl lg:text-6xl font-bold bg-gradient-to-r from-rose-600 via-pink-500 to-fuchsia-400 inline-block text-transparent bg-clip-text pb-1">{name} Profile Page</h2>
      <p>{desc}</p>

      <div>
        <BarChart data={data} />
      </div>


    </section>
  )
}

export default Profile
