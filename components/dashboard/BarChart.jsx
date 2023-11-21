
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



    // const exerciseArr = exerciseObjData.flatMap((obj) => {
    //     return obj.exerciseObj
    // })

    // const weight1Arr = exerciseArr.map((exer) => {
    //     return exer.weight1
    // })

    // labels: data.map(({ date }) =>
    //     new Date(date).toLocaleDateString('en-US', {
    //         weekday: 'short',
    //         month: 'short',
    //         day: 'numeric',
    //     })
    //     ),


    const chartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: '# of Workouts',
                data: [10, 20, 5, 0, 2, 15, 20, 4, 9, 12, 11, 10],
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
                    color: "white"
                }
            },
            y: {
                display: true,
                ticks: {
                    color: "white"
                }
            }
        },
        maintainAspectRatio: false,
        responsive: true
    }


  return (
    <div>
        <Bar
            data={chartData}
            options={chartOptions}
        />
    </div>
  )
}

export default BarChart
