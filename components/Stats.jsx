
'use client'

import { useEffect, useState } from 'react'


const Stats = ({ data }) => {

    const [userData, setUserData] = useState([])

    const [strengthCount, setStrengthCount] = useState(0)
    const [classData, setClassData] = useState(0)
    const [cardioData, setCardioData] = useState(0)
    const [HIITData, setHIITData] = useState(0)

    const [userStats, setUserStats] = useState('')

    // useEffect(() => {
    //     const fetchPosts = async () => {
    //       const response = await fetch('/api/workout');
    //       const data = await response.json();
    //       setUserData(data);
    //     }

    //     fetchPosts();
    //   }, [])

      //const totalWorkouts = userData.length;

      console.log(data)


      // const yearlyWorkouts = userData.map((workout) => {
      //       let date = workout.date

      //       console.log(date)
      // })


      // const tagData = userData.map((obj) => {
      //     obj.tag === "strength" ? setStrengthCount(prevStrengthCount => prevStrengthCount + 1)
      //     : null
      // })

      // const findTag = () => {
      //   for(let i = 0; i < userData.length; i++) {
      //     console.log(userData[i].tag)
      //     if(userData[i].tag === "strength") {
      //       setStrengthCount(prevStrengthCount => prevStrengthCount++)
      //     }
      //   }
      // }

      // findTag()



  return (


    <div className="stats stats-vertical lg:stats-horizontal shadow">

    <div className="stat">
        <div className="stat-title">Workouts</div>
        <div className="stat-value">{}</div>
        <div className="stat-desc">Total To Date</div>
    </div>

    <div className="stat">
        <div className="stat-title">Strength Workouts</div>
        <div className="stat-value">{}</div>
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
