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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useMemo } from "react";
import { useTheme } from "next-themes";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// removed old options; using theme-aware chartOptions below

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
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
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
        borderColor: "rgba(56, 189, 248, 1)", // neon cyan
        backgroundColor: "rgba(56, 189, 248, 0.18)",
        fill: true,
      },
      {
        label: "2024",
        data: monthlyCountsByYear[2024] || Array(12).fill(0),
        borderColor: "rgba(168, 85, 247, 1)", // neon fuchsia
        backgroundColor: "rgba(168, 85, 247, 0.18)",
        fill: true,
      },
      {
        label: "2023",
        data: monthlyCountsByYear[2023] || Array(12).fill(0),
        borderColor: "rgba(34, 197, 94, 1)", // emerald accent
        backgroundColor: "rgba(34, 197, 94, 0.16)",
        fill: true,
      },
    ],
  };

  const chartOptions = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top",
          align: "end",
          labels: {
            color: isDark ? "#cbd5e1" : "#64748b",
            boxWidth: 12,
            usePointStyle: true,
            pointStyle: "circle",
          },
        },
        title: { display: false },
        tooltip: {
          backgroundColor: "rgba(2,6,23,.92)",
          displayColors: false,
          padding: 10,
        },
      },
      elements: {
        line: { tension: 0.35, borderWidth: 2 },
        point: { radius: 0, hoverRadius: 3 },
      },
      scales: {
        x: { grid: { display: false }, ticks: { color: "#94a3b8" } },
        y: {
          grid: {
            color: isDark ? "rgba(148,163,184,.18)" : "rgba(148,163,184,.20)",
          },
          ticks: { color: "#94a3b8" },
          border: { display: false },
        },
      },
    }),
    [isDark]
  );

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
  console.log("Workout Counts:", workoutCounts.currentMonth);
  console.log("Workout Counts:", workoutCounts.previousMonth);

  return (
    <div className='flex w-full flex-col items-center justify-center gap-4'>
      <div className='grid w-full grid-cols-1 gap-4 px-2 md:grid-cols-3'>
        <Card className='soft-shadow relative overflow-hidden rounded-2xl border-none bg-teal-900/40'>
          <div className='neon-glow' />
          <CardHeader className='pb-2'>
            <CardTitle className='text-center text-sm font-medium text-slate-200'>
              Workouts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-center text-2xl font-bold text-teal-400'>
              {yearlyWorkoutCounts.currentYear}
            </div>
            <p className='mt-1 text-center text-xs text-slate-400'>
              Total {currentYear}
            </p>
          </CardContent>
        </Card>
        <Card className='soft-shadow relative overflow-hidden rounded-2xl border-none bg-teal-900/40'>
          <div className='' />
          <CardHeader className='pb-2'>
            <CardTitle className='text-center text-sm font-medium text-slate-200'>
              Current Month
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-center text-2xl font-bold text-teal-400'>
              {workoutCounts.currentMonth}
            </div>
            <div className='mt-1 flex items-center justify-center gap-1 text-xs text-slate-400'>
              <span>
                {workoutCounts.currentMonth < workoutCounts.previousMonth ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='size-4'
                  >
                    <path
                      fillRule='evenodd'
                      d='M12.577 4.878a.75.75 0 01.919-.53l4.78 1.281a.75.75 0 01.531.919l-1.281 4.78a.75.75 0 01-1.449-.387l.81-3.022a19.407 19.407 0 00-5.594 5.203.75.75 0 01-1.139.093L7 10.06l-4.72 4.72a.75.75 0 01-1.06-1.061l5.25-5.25a.75.75 0 011.06 0l3.074 3.073a20.923 20.923 0 015.545-4.931l-3.042-.815a.75.75 0 01-.53-.919z'
                      clipRule='evenodd'
                    />
                  </svg>
                ) : workoutCounts.currentMonth ===
                  workoutCounts.previousMonth ? null : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='size-4'
                  >
                    <path
                      fillRule='evenodd'
                      d='M12.577 4.878a.75.75 0 01.919-.53l4.78 1.281a.75.75 0 01.531.919l-1.281 4.78a.75.75 0 01-1.449-.387l.81-3.022a19.407 19.407 0 00-5.594 5.203.75.75 0 01-1.139.093L7 10.06l-4.72 4.72a.75.75 0 01-1.06-1.061l5.25-5.25a.75.75 0 011.06 0l3.074 3.073a20.923 20.923 0 015.545-4.931l-3.042-.815a.75.75 0 01-.53-.919z'
                      clipRule='evenodd'
                    />
                  </svg>
                )}
              </span>

              {workoutCounts.currentMonth - workoutCounts.previousMonth}
              {/* Percentage Calculation */}
              <span>
                (
                {workoutCounts.currentMonth < workoutCounts.previousMonth
                  ? (
                      (workoutCounts.currentMonth /
                        workoutCounts.previousMonth) *
                      100
                    ).toFixed(0)
                  : (
                      (workoutCounts.previousMonth /
                        workoutCounts.currentMonth) *
                      100
                    ).toFixed(0)}
                )%
              </span>
            </div>
          </CardContent>
        </Card>
        <Card className='soft-shadow relative overflow-hidden rounded-2xl border-none bg-teal-900/40'>
          <div className='neon-glow' />
          <CardHeader className='pb-2'>
            <CardTitle className='text-center text-sm font-medium text-slate-200'>
              Previous Month
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-center text-2xl font-bold text-teal-400'>
              {workoutCounts.previousMonth}
            </div>
            <div className='mt-1 flex items-center justify-center gap-1 text-xs text-slate-400'>
              <span>
                {workoutCounts.previousMonth > workoutCounts.monthBeforeLast ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20
                20'
                    fill='currentColor'
                    className='size-4'
                  >
                    <path
                      fillRule='evenodd'
                      d='M12.577 4.878a.75.75 0 01.919-.53l4.78 1.281a.75.75 0 01.531.919l-1.281 4.78a.75.75 0 01-1.449-.387l.81-3.022a19.407 19.407 0 00-5.594 5.203.75.75 0 01-1.139.093L7 10.06l-4.72 4.72a.75.75 0 01-1.06-1.061l5.25-5.25a.75.75 0 011.06 0l3.074 3.073a20.923 20.923 0 015.545-4.931l-3.042-.815a.75.75 0 01-.53-.919z'
                      clipRule='evenodd'
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='size-4'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z'
                      clipRule='evenodd'
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
          </CardContent>
        </Card>
      </div>
      <div className='soft-shadow relative mx-auto mt-10 w-full rounded-2xl border border-white/10 bg-slate-900/40 p-4 backdrop-blur'>
        <div className='neon-glow' />
        <div className='h-64 w-full md:h-72'>
          <Line options={chartOptions} data={chartData} />
        </div>
      </div>
    </div>
  );
};

export default Stats;
