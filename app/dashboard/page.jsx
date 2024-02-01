import CompletedWorkouts from "@components/dashboard/CompletedWorkouts";


const MyDashboard = () => {


  return (

    <div className="max-w-screen lg:max-w-4xl mx-auto bgPattern">

      <div className="w-full">
          <CompletedWorkouts />
      </div>

    </div>

  )
}

export default MyDashboard
