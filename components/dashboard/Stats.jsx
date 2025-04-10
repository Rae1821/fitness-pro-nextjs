import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Workouts",
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Stats = ({ data }) => {
  const monthlyWorkouts = data.filter((workout) => {
    const workoutDate = new Date(workout.date);
    const currentMonth = new Date().getMonth() + 1;
    const workoutMonth = workoutDate.getMonth() + 1;
    // check if the workout is from the current month or the previous month
    return (
      workoutMonth === currentMonth ||
      workoutMonth === currentMonth - 1 ||
      workoutMonth === currentMonth - 2
    );
  });

  const yearlyWorkouts = data.filter((workout) => {
    const workoutDate = new Date(workout.date);
    const currentYear = new Date().getFullYear();
    const workoutYear = workoutDate.getFullYear();

    // check if the workout is from the current year or the previous year
    return (
      workoutYear === currentYear ||
      workoutYear === currentYear - 1 ||
      workoutYear === currentYear - 2
    );
  });

  // count the workouts for the current year/previous year with reduce
  const yearlyWorkoutCounts = yearlyWorkouts.reduce(
    (counts, workout) => {
      const workoutYear = new Date(workout.date).getFullYear();
      const currentYear = new Date().getFullYear();

      // increment the count for the corresponding year
      counts[
        workoutYear === currentYear
          ? "currentYear"
          : workoutYear === currentYear - 2
            ? "yearBeforeLast"
            : "previousYear"
      ] += 1;

      return counts;
    },
    { currentYear: 0, previousYear: 0, yearBeforeLast: 0 }
  );

  const monthlyCountsByYear = data.reduce((counts, workout) => {
    const workoutDtae = new Date(workout.date);
    const workoutYear = new Date(workout.date).getFullYear();
    const workoutMonth = workoutDtae.getMonth();

    // Initialize the year in the counts object if it doesn't exist
    if (!counts[workoutYear]) {
      counts[workoutYear] = Array(12).fill(0);
    }

    // Increment the count for the corresponding month
    counts[workoutYear][workoutMonth]++;

    return counts;
  }, {});

  // Example: Access monthly counts for a specific year
  console.log("2023 Monthly Counts:", monthlyCountsByYear[2023] || []);
  console.log("2024 Monthly Counts:", monthlyCountsByYear[2024] || []);
  console.log("2025 Monthly Counts:", monthlyCountsByYear[2025] || []);

  const chartData = {
    labels,
    datasets: [
      {
        label: "2025",
        data: monthlyCountsByYear[2025] || Array(12).fill(0),
        borderColor: "rgb(0, 194, 146)",
        backgroundColor: "rgba(0, 194, 146, 0.76)",
        fill: true,
      },
      {
        label: "2024",
        data: monthlyCountsByYear[2024] || Array(12).fill(0),
        borderColor: "rgb(242, 195, 53)",
        backgroundColor: "rgba(242, 195, 53, 0.95)",
        fill: true,
      },
      {
        label: "2023",
        data: monthlyCountsByYear[2023] || Array(12).fill(0),
        borderColor: "rgb(47, 201, 215)",
        backgroundColor: "rgba(47, 201, 215, 0.84)",
        fill: true,
      },
    ],
  };

  // Count the workouts for the current month or the previous month using reduce
  const workoutCounts = monthlyWorkouts.reduce(
    (counts, workout) => {
      const workoutMonth = new Date(workout.date).getMonth() + 1;
      const currentMonth = new Date().getMonth() + 1;

      // console.log("Workout Month:", workoutMonth);
      // Increment the count for the corresponding month
      counts[
        workoutMonth === currentMonth
          ? "currentMonth"
          : workoutMonth === currentMonth - 2
            ? "monthBeforeLast"
            : "previousMonth"
      ] += 1;

      return counts;
    },
    { currentMonth: 0, previousMonth: 0, monthBeforeLast: 0 }
  );

  const currentYear = new Date().getFullYear();

  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
      <div className="stats stats-vertical w-full items-center justify-center px-2 text-center shadow md:stats-horizontal">
        <div className="stat bg-neutral shadow-md">
          <div className="stat-title">Workouts</div>
          <div className="stat-value text-center">
            {yearlyWorkoutCounts.currentYear}
          </div>
          <div className="stat-desc">Total {currentYear}</div>
        </div>

        <div className="stat bg-neutral shadow-md">
          <div className="stat-title">This Month</div>
          <div className="stat-value text-center">
            {workoutCounts.currentMonth}
          </div>
          <div
            className={
              workoutCounts.currentMonth > workoutCounts.previousMonth
                ? "stat-desc mt-1 flex items-center justify-center gap-1 text-success"
                : "stat-desc mt-1 flex items-center justify-center gap-1 text-accent"
            }
          >
            <span>
              {workoutCounts.currentMonth > workoutCounts.previousMonth ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.577 4.878a.75.75 0 01.919-.53l4.78 1.281a.75.75 0 01.531.919l-1.281 4.78a.75.75 0 01-1.449-.387l.81-3.022a19.407 19.407 0 00-5.594 5.203.75.75 0 01-1.139.093L7 10.06l-4.72 4.72a.75.75 0 01-1.06-1.061l5.25-5.25a.75.75 0 011.06 0l3.074 3.073a20.923 20.923 0 015.545-4.931l-3.042-.815a.75.75 0 01-.53-.919z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.22 5.222a.75.75 0 011.06 0L7 9.942l3.768-3.769a.75.75 0 011.113.058 20.908 20.908 0 013.813 7.254l1.574-2.727a.75.75 0 011.3.75l-2.475 4.286a.75.75 0 01-1.025.275l-4.287-2.475a.75.75 0 01.75-1.3l2.71 1.565a19.422 19.422 0 00-3.013-6.024L7.53 11.533a.75.75 0 01-1.06 0l-5.25-5.25a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </span>
            {workoutCounts.currentMonth - workoutCounts.previousMonth}
            <span>
              (
              {workoutCounts.currentMonth < workoutCounts.previousMonth
                ? (
                    (workoutCounts.currentMonth / workoutCounts.previousMonth) *
                    100
                  ).toFixed(0)
                : (
                    (workoutCounts.previousMonth / workoutCounts.currentMonth) *
                    100
                  ).toFixed(0)}
              )%
            </span>
          </div>
        </div>

        <div className="stat bg-neutral shadow-md">
          <div className="stat-title">Last Month</div>
          <div className="stat-value text-center">
            {workoutCounts.previousMonth}
          </div>
          <div
            className={
              workoutCounts.previousMonth > workoutCounts.monthBeforeLast
                ? "stat-desc mt-1 flex items-center justify-center gap-1 text-success"
                : "stat-desc mt-1 flex items-center justify-center gap-1 text-accent"
            }
          >
            <span>
              {workoutCounts.previousMonth > workoutCounts.monthBeforeLast ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20
                20"
                  fill="currentColor"
                  className="size-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.577 4.878a.75.75 0 01.919-.53l4.78 1.281a.75.75 0 01.531.919l-1.281 4.78a.75.75 0 01-1.449-.387l.81-3.022a19.407 19.407 0 00-5.594 5.203.75.75 0 01-1.139.093L7 10.06l-4.72 4.72a.75.75 0 01-1.06-1.061l5.25-5.25a.75.75 0 011.06 0l3.074 3.073a20.923 20.923 0 015.545-4.931l-3.042-.815a.75.75 0 01-.53-.919z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </span>
            <span>
              {workoutCounts.previousMonth - workoutCounts.monthBeforeLast}
            </span>
            <span>
              (
              {workoutCounts.previousMonth < workoutCounts.monthBeforeLast
                ? (
                    (workoutCounts.previousMonth /
                      workoutCounts.monthBeforeLast) *
                    100
                  ).toFixed(0)
                : (
                    (workoutCounts.monthBeforeLast /
                      workoutCounts.previousMonth) *
                    100
                  ).toFixed(0)}
              )%
            </span>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 w-full">
        <Line options={options} data={chartData} />
      </div>
    </div>
  );
};

export default Stats;
