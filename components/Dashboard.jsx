'use client'

import { useState, useEffect } from 'react'

import DashboardCard from './DashboardCard'

const DashboardCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-4 space-y-6 py-8">
      {data.map((post) => (
        <DashboardCard
          key={post._id}
          post={post.exerciseRow}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}

const Dashboard = () => {

  const [searchText, setSearchText] = useState('')
  const [posts, setPosts] = useState([])

  const handleSearchChange = (e) => {

  }

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/workout');
      const data = await response.json();

      setPosts(data);
    }

    fetchPosts();
  }, [])



  return (
    <section>

      <div className="text-left ml-8 py-8 text-4xl font-bold flex items-center justify-between">
        <h2 className="green_gradient">My Dashboard</h2>

        <form className="relative w-1/4 mr-8">
          <input
            type="text"
            placeholder="Search for a workout"
            value={searchText}
            onChange={handleSearchChange}
            required
            className="block w-full rounded-md border border-gray-200 bg-white py-2.5 pl-5 pr-12 text-sm shadow-lg font-medium focus:outline-none focus:ring-0"
          />
        </form>
      </div>



      <div className="bg-white w-full mx-4 p-2 border rounded-lg flex flex-col justify-center items-center">
        <h3 className="text-3xl mt-8 font-semibold">Completed Workouts</h3>
        <DashboardCardList
            data={posts}
            handleTagClick={()=> {}}
          />
      </div>

    </section>
  )
}

export default Dashboard
