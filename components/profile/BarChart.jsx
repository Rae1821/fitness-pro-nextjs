
import { Bar } from 'react-chartjs-2';
import {
    Chart,
    Colors,
    BarController,
    CategoryScale,
    LinearScale,
    BarElement,
    Legend
} from 'chart.js';

Chart.register(
    Colors,
    BarController,
    BarElement,
    CategoryScale,
    LinearScale,
    Legend
);

const BarChart = ({ data }) => {

    //extract the months from each workout
    const monthsData = data.map((post) => new Date(post.date).getMonth());
    console.log(monthsData)

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const monthCount = monthsData.map((month) => month)
console.log(monthCount)

    //count the occurences of each month
    // const workoutCountByMonth = monthsData.reduce((acc, month) => {

    //     acc[month] = (acc[month] || 0) + 1;
    //     return acc;
    // }, {})
    // console.log(workoutCountByMonth)
    const workoutCountsByMonth = monthsData.map((month) => {
        let monthTotal = 0
        console.log(months[month])
        if(months[month] === month) {
            monthTotal += 1
        }
        return monthTotal
    })

    const workoutCounts = monthsData.filter((item) => months[item])
    console.log(workoutCountsByMonth)
    // ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    const chartData = {
        labels: monthsData,
        datasets: [
            {
                label: '# of Workouts',
                data: workoutCountsByMonth,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            },
        ]
    }

    const chartOptions = {
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Total Workouts By Month',
                color: "white"
            }
        },
        scales: {
            x: {
                display: true,
                ticks: {
                    color: "black"
                }
            },
            y: {
                display: true,
                ticks: {
                    color: "black"
                }
            }
        },
        maintainAspectRatio: false,
        responsive: true
    }


  return (
    <div>
        <Bar
            datasetIdKey='id'
            data={chartData}
            options={chartOptions}
        />
    </div>
  )
}

export default BarChart
