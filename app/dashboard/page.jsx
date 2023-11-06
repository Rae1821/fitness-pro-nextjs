
import Stats from "@components/Stats"
import BarChart from "@components/BarChart"

const MyDashboard = () => {



  return (

    <div className="p-4">
        <div className="my-13">
            <h1 className="text-5xl font-display font-bold">My Dashboard</h1>
        </div>

    <div>
      <Stats />
    </div>

    <div className="mt-13">
        <BarChart />
    </div>


    </div>
  )
}

export default MyDashboard
