import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LineElement,
    PointElement,
    LinearScale,
    Title
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LineElement,
    PointElement,
    LinearScale,
    Title
);


//see how many days you worked out, how many months you've worked out

const LineChart = ({ data, exerciseObjData }) => {

    const options = {
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: "Workouts Completed Over Time",
                color: "white",
                font: {
                    size: 18
                }
            }
        },
        elements: {
            line: {
                tension: 0,
                borderWidth: 1,
                borderColor: "lightblue",
                fill: "start",
                backgroundColor: "lightblue"
            },
            point: {
                radius: 5,
                hitRadius: 10,
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
    }

    const defaultData = {

            labels: data.map(({ date }) =>
            new Date(date).toLocaleDateString('en-US', {
                weekday: 'short',
                month: 'short',
                day: 'numeric',
            })
            ),
            datasets: [
                {
                    data: [4, 2, 8, 6],
                    label: "# of Workouts",
                    borderColor: "#06b6d4",

                },
            ],
    }


    const lineChart = data[0] ? (
        <Line
            data={{
                labels: data.map(({ date }) =>
                new Date(date).toLocaleDateString('en-US', {
                    weekday: 'short',
                    month: 'short',
                    day: 'numeric',
                })
                ),
                datasets: [
                    {
                        data: [4, 2, 8, 6],
                        label: "# of Workouts",
                        borderColor: "#06b6d4",

                    },
                ],
            }}
        />
    ) : null;


  return (
    <div>
        <h2>Line Chart</h2>
        <Line
        data={defaultData}
        options={options}
        ></Line>
    </div>
  )
}

export default LineChart
