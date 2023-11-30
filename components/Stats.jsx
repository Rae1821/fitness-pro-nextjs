
'use client'

import { useEffect, useState } from 'react'


const Stats = ({ data }) => {

    const [userData, setUserData] = useState([])

    const [userStats, setUserStats] = useState({
        currentMonth: [],
        lastMonth: [],
    })

    const [currentMonth, setCurrentMonth] = useState(0)
    const [lastMonth, setLastMonth] = useState(0)



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

      //console.log(userData)

      const [monthlyCount, setMonthlyCount] = useState({
        currentMonth: [],
        lastMonth: [],
      })

      const monthlyWorkouts = userData.filter((workout) => {
        const workoutDate = new Date(workout.date);
        const currentMonth = new Date().getMonth() + 1;
        const workoutMonth = workoutDate.getMonth() + 1;

        //check if the workout is from the current month or the previous month
        return workoutMonth === currentMonth || workoutMonth === currentMonth - 1;
      });

      //Count the workouts for the current month or the previous month using reduce
      const workoutCounts = monthlyWorkouts.reduce((counts, workout) => {
        const workoutMonth = new Date(workout.date).getMonth() + 1;
        const currentMonth = new Date().getMonth() + 1;

        //Increment the count for the corresponding month
        counts[workoutMonth === currentMonth ? 'currentMonth' : 'previousMonth'] += 1;

        return counts;

      }, { currentMonth: 0, previousMonth: 0 });


      // Display the counts
      console.log('Current Month Workouts:', workoutCounts.currentMonth);
      console.log('Previous Month Workouts:', workoutCounts.previousMonth);





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
        <div className="stat-value text-center">{workoutCounts.currentMonth}</div>
        <div className={
          workoutCounts.currentMonth - workoutCounts.previousMonth > 0
          ? 'stats-desc text-lime-300 text-[10px]'
          : 'stats-desc text-rose-400 text-[10px]'}
          >
          ↗︎ {workoutCounts.currentMonth - workoutCounts.previousMonth} (22%)
        </div>
    </div>

    <div className="stat bg-neutral shadow-md">
        <div className="stat-title">Last Month</div>
        <div className="stat-value text-center">{workoutCounts.previousMonth}</div>
        <div className="stat-desc text-rose-400">↘︎ 90 (14%)</div>
    </div>

    </div>
</>

  )
}

export default Stats
