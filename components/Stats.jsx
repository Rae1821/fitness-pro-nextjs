
'use client'

import { useEffect, useState } from 'react'


const Stats = ({ data }) => {

    const [userData, setUserData] = useState([])

    const [strengthCount, setStrengthCount] = useState(0)
    const [classData, setClassData] = useState(0)
    const [cardioData, setCardioData] = useState(0)
    const [HIITData, setHIITData] = useState(0)

    const [userStats, setUserStats] = useState('')

    let nov = []
    let oct = []

    useEffect(() => {
        const fetchPosts = async () => {
          const response = await fetch('/api/workout');
          const data = await response.json();
          setUserData(data);
        }

        fetchPosts();
      }, [])

      console.log(userData)

      const monthlyWorkouts = userData.map((post) => {
        const formattedMonth = new Date(post.date).toLocaleDateString('en-US', {
          month: 'numeric',
        })
        if(formattedMonth === '11') {
          nov.push(formattedMonth)
        } else {
          oct.push(formattedMonth)
        }
        return formattedMonth

      })






  return (

    <div className="stats stats-vertical lg:stats-horizontal shadow">

    <div className="stat">
        <div className="stat-title">Workouts</div>
        <div className="stat-value">{userData.length}</div>
        <div className="stat-desc">Total To Date</div>
    </div>

    <div className="stat">
        <div className="stat-title">Workouts This Month</div>
        <div className="stat-value">{nov.length}</div>
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
