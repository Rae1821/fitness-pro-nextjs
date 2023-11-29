
'use client'

import { useEffect, useState } from 'react'


const Stats = ({ data }) => {

    const [userData, setUserData] = useState([])

    const [userStats, setUserStats] = useState({
        currentMonth: [],
        lastMonth: [],
    })

    const [currentMonth, setCurrentMonth] = useState([])
    const [lastMonth, setLastMonth] = useState([])



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
        const currentDate = new Date();
        const thisMonth = currentDate.getMonth() + 1;

        if(formattedMonth === thisMonth) {
          setCurrentMonth(prevCurrentMonth => prevCurrentMonth+ 1);
        } else if(formattedMonth === (thisMonth -1)) {
          setLastMonth(prevLastMonth => prevLastMonth + 1)
        }
        console.log(formattedMonth)
        return formattedMonth
      })


      console.log(currentMonth)
      console.log(lastMonth)



  return (
<>
    <div className="stats stats-horizontal justify-center md:stats-horizontal shadow text-center">

    <div className="stat bg-neutral shadow-md">
        <div className="stat-title">Workouts</div>
        <div className="stat-value text-center">{userData.length}</div>
        <div className="stat-desc">Total To Date</div>
    </div>

    <div className="stat bg-neutral shadow-md">
        <div className="stat-title">This Month</div>
        <div className="stat-value text-center">{nov.length}</div>
        <div className="stat-desc text-lime-500">↗︎ 400 (22%)</div>
    </div>

    <div className="stat bg-neutral shadow-md">
        <div className="stat-title">Last Month</div>
        <div className="stat-value text-center">{oct.length}</div>
        <div className="stat-desc text-rose-400">↘︎ 90 (14%)</div>
    </div>

    </div>
</>

  )
}

export default Stats
