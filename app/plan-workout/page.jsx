import PlanWorkout from "@components/PlanWorkout";

export default function CreatePlanPage() {
  return (
    <section className='mt-12 flex w-full max-w-full flex-col px-4 lg:px-6'>
      <h1 className='text-left text-4xl font-bold'>
        <span className='bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 bg-clip-text text-transparent'>
          Plan a Workout
        </span>
      </h1>
      <p className='max-w-md text-left text-gray-600'>
        Schedule a workout for a future date and get notified when it&apos;s
        time to work out
      </p>

      <PlanWorkout />
    </section>
  );
}
