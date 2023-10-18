'use client'

import { useState, useEffect } from 'react'

import DashboardCard from './DashboardCard'

const DashboardCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 space-y-6 py-8">
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
    <section className="dashboard">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a workout"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="block w-full rounded-md border border-gray-200 bg-white py-2.5 pl-5 pr-12 text-sm shadow-lg font-medium focus:outline-none focus:ring-0"
        />
      </form>

      <div className="mt-16 head_text">
        <h2 className="green_gradient">Completed Workouts</h2>
      </div>

      <DashboardCardList
        data={posts}
        handleTagClick={()=> {}}
      />
    </section>
  )
}

export default Dashboard
