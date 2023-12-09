
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
        return workoutMonth === currentMonth || workoutMonth === currentMonth - 1 || workoutMonth === currentMonth - 2;
      });

      //Count the workouts for the current month or the previous month using reduce
      const workoutCounts = monthlyWorkouts.reduce((counts, workout) => {
        const workoutMonth = new Date(workout.date).getMonth() + 1;
        const currentMonth = new Date().getMonth() + 1;

        //Increment the count for the corresponding month
        counts[workoutMonth === currentMonth ? 'currentMonth' : workoutMonth === currentMonth - 2 ? 'monthBeforeLast' : 'previousMonth' ] += 1;

        return counts;

      }, { currentMonth: 0, previousMonth: 0, monthBeforeLast: 0 });


      // Display the counts
      console.log('Current Month Workouts:', workoutCounts.currentMonth);
      console.log('Previous Month Workouts:', workoutCounts.previousMonth);
      console.log('Month before last workouts:', workoutCounts.monthBeforeLast)





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
          workoutCounts.currentMonth > workoutCounts.previousMonth
          ? 'stat-desc text-success flex items-center gap-1 justify-center mt-1'
          : 'stat-desc text-accent flex items-center gap-1 justify-center mt-1'}
          >
          <span>{workoutCounts.currentMonth > workoutCounts.previousMonth
            ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M12.577 4.878a.75.75 0 01.919-.53l4.78 1.281a.75.75 0 01.531.919l-1.281 4.78a.75.75 0 01-1.449-.387l.81-3.022a19.407 19.407 0 00-5.594 5.203.75.75 0 01-1.139.093L7 10.06l-4.72 4.72a.75.75 0 01-1.06-1.061l5.25-5.25a.75.75 0 011.06 0l3.074 3.073a20.923 20.923 0 015.545-4.931l-3.042-.815a.75.75 0 01-.53-.919z" clipRule="evenodd" />
              </svg>

            : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M1.22 5.222a.75.75 0 011.06 0L7 9.942l3.768-3.769a.75.75 0 011.113.058 20.908 20.908 0 013.813 7.254l1.574-2.727a.75.75 0 011.3.75l-2.475 4.286a.75.75 0 01-1.025.275l-4.287-2.475a.75.75 0 01.75-1.3l2.71 1.565a19.422 19.422 0 00-3.013-6.024L7.53 11.533a.75.75 0 01-1.06 0l-5.25-5.25a.75.75 0 010-1.06z" clipRule="evenodd" />
              </svg>

          }
          </span>
           {workoutCounts.currentMonth - workoutCounts.previousMonth}
          <span>
            ({workoutCounts.currentMonth < workoutCounts.previousMonth
            ? ((workoutCounts.currentMonth / workoutCounts.previousMonth) * 100).toFixed(0)
            : ((workoutCounts.previousMonth / workoutCounts.currentMonth) * 100).toFixed(0)
            })%
          </span>

        </div>
    </div>

    <div className="stat bg-neutral shadow-md">
        <div className="stat-title">Last Month</div>
        <div className="stat-value text-center">{workoutCounts.previousMonth}</div>
        <div className={workoutCounts.previousMonth > workoutCounts.monthBeforeLast
        ? "stat-desc text-success flex items-center gap-1 justify-center mt-1"
        : "stat-desc text-accent flex items-center gap-1 justify-center mt-1"
        }>
          <span>{workoutCounts.previousMonth > workoutCounts.monthBeforeLast
            ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20
                20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M12.577 4.878a.75.75 0 01.919-.53l4.78 1.281a.75.75 0 01.531.919l-1.281 4.78a.75.75 0 01-1.449-.387l.81-3.022a19.407 19.407 0 00-5.594 5.203.75.75 0 01-1.139.093L7 10.06l-4.72 4.72a.75.75 0 01-1.06-1.061l5.25-5.25a.75.75 0 011.06 0l3.074 3.073a20.923 20.923 0 015.545-4.931l-3.042-.815a.75.75 0 01-.53-.919z" clipRule="evenodd" />
              </svg>

            : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" clipRule="evenodd" />
              </svg>
            }
          </span>
          <span>
            {workoutCounts.previousMonth - workoutCounts.monthBeforeLast}
          </span>
          <span>
            ({workoutCounts.previousMonth < workoutCounts.monthBeforeLast
            ? ((workoutCounts.previousMonth / workoutCounts.monthBeforeLast) * 100).toFixed(0)
            : ((workoutCounts.monthBeforeLast / workoutCounts.previousMonth) * 100).toFixed(0)
            })%
          </span>
        </div>
    </div>

    </div>
</>

  )
}

export default Stats
