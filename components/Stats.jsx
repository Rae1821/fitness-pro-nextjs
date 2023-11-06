
'use client'

import { useEffect, useState } from 'react'


const Stats = ({ data }) => {

    const [userData, setUserData] = useState([])

    const [userStats, setUserStats] = useState('')

    useEffect(() => {
        const fetchPosts = async () => {
          const response = await fetch('/api/workout');
          const data = await response.json();
          setUserData(data);
        }

        fetchPosts();
      }, [])

     // console.log(userData)

      const totalWorkouts = userData.length;

      const yearlyWorkouts = userData.map((workout) => {
            let date = workout.date

            console.log(date)
      })

      console.log(userData)


  return (


    <div className="stats stats-vertical lg:stats-horizontal shadow">

    <div className="stat">
        <div className="stat-title">Workouts</div>
        <div className="stat-value">{totalWorkouts}</div>
        <div className="stat-desc">Total To Date</div>
    </div>

    <div className="stat">
        <div className="stat-title">New Users</div>
        <div className="stat-value">4,200</div>
        <div className="stat-desc">↗︎ 400 (22%)</div>
    </div>

    <div className="stat">
        <div className="stat-title">New Registers</div>
        <div className="stat-value">1,200</div>
        <div className="stat-desc">↘︎ 90 (14%)</div>
    </div>

    </div>




  )
}

export default Stats
