import Link from "next/link";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const WorkoutForm = ({
  type,
  post,
  setPost,
  date,
  setDate,
  submitting,
  handleSubmit,
  handleClick,
}) => {
  return (
    <section className='w-full max-w-full px-6 py-8'>
      <div className='flex flex-col items-center md:items-start'>
        <h1 className='mt-8 inline-block bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 bg-clip-text pb-1 text-left text-4xl font-extrabold leading-[1.15] text-transparent md:text-5xl lg:text-6xl'>
          Strength Workout
        </h1>
        <p className='text-sm md:text-base lg:text-left'>
          {type} and {type === "Plan" ? "schedule" : "record"} your strength
          workout
        </p>
      </div>

      <form onSubmit={handleSubmit} className='mx-auto mt-10 w-full'>
        {/* Top of Form */}
        <div className='mb-4 grid grid-cols-1 gap-4 border-b border-slate-300 px-10 pb-4 md:grid-cols-2 lg:grid-cols-4'>
          {/* Date Input */}
          <div className='space-y-2'>
            <Label className='flex flex-col items-center font-semibold'>
              {type === "Plan" ? "Scheduled Date" : "Date Completed"}
            </Label>
            <div className='flex w-full justify-center'>
              <DatePicker
                selected={date}
                onChange={(date) => setDate(date)}
                className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                minDate={type === "Plan" ? new Date() : undefined}
              />
            </div>
          </div>
          {/* Workout Focus Input */}
          <div className='space-y-2'>
            <Label className='flex flex-col items-center justify-center font-semibold'>
              Workout Focus
            </Label>
            <Input
              type='text'
              name='workoutName'
              value={post.workoutName}
              placeholder='Legs'
              onChange={(e) =>
                setPost({ ...post, workoutName: e.target.value })
              }
              className='mt-2 text-sm'
            />
          </div>
          {/* pre-populated tag */}
          <div className='space-y-2'>
            <Label className='flex flex-col items-center font-semibold'>
              #Tag
            </Label>
            <div className='mt-2 flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm'>
              {post.tag}
            </div>
          </div>
          {/* Duration Input */}
          <div className='space-y-2'>
            <Label className='flex flex-col items-center justify-center font-semibold'>
              Duration
            </Label>
            <Input
              type='text'
              name='duration'
              value={post.duration}
              placeholder='30'
              onChange={(e) => setPost({ ...post, duration: e.target.value })}
              className='mt-2 text-sm'
            />
          </div>
        </div>

        {post.exerciseObj.map((exer, index) => {
          return (
            <div
              key={index}
              className='mt-4 grid grid-cols-1 items-center gap-2 border-b border-slate-300 px-10 pb-4 md:grid-cols-3 lg:grid-cols-6'
            >
              <div className='mb-2 w-full space-y-2 text-center font-semibold md:col-span-4 md:row-start-1 lg:col-span-1 lg:row-start-1'>
                <Label>Exercise:</Label>
                <Input
                  type='text'
                  value={exer.exercise}
                  placeholder='Deadlift'
                  name='exercise'
                  onChange={(e) => {
                    const updatedExerciseObj = [...post.exerciseObj];
                    updatedExerciseObj[index].exercise = e.target.value;
                    setPost({ ...post, exerciseObj: updatedExerciseObj });
                  }}
                  className='text-sm font-normal'
                />
              </div>

              <div className='mb-2 space-y-2 text-center font-semibold md:row-start-2 md:auto-cols-auto lg:col-span-1 lg:row-start-1'>
                <Label>Sets:</Label>
                <Input
                  type='text'
                  value={exer.sets}
                  name='sets'
                  placeholder='0'
                  onChange={(e) => {
                    const updatedExerciseObj = [...post.exerciseObj];
                    updatedExerciseObj[index].sets = e.target.value;
                    setPost({ ...post, exerciseObj: updatedExerciseObj });
                  }}
                  className='text-sm font-normal'
                />
              </div>
              <div className='mb-2 space-y-2 text-center font-semibold md:col-span-2 md:row-start-2 lg:col-span-1 lg:row-start-1'>
                <Label>Weight:</Label>
                <Input
                  type='text'
                  value={exer.weight}
                  name='reps'
                  placeholder='0'
                  onChange={(e) => {
                    const updatedExerciseObj = [...post.exerciseObj];
                    updatedExerciseObj[index].weight = e.target.value;
                    setPost({ ...post, exerciseObj: updatedExerciseObj });
                  }}
                  className='col-span-2 text-sm font-normal'
                />
              </div>
              <div className='mb-2 space-y-2 text-center font-semibold md:col-span-1 md:row-start-3 lg:col-span-1 lg:row-start-1'>
                <Label>Rep 1</Label>
                <Input
                  type='text'
                  value={exer.rep1}
                  name='rep1'
                  placeholder='0'
                  onChange={(e) => {
                    const updatedExerciseObj = [...post.exerciseObj];
                    updatedExerciseObj[index].rep1 = e.target.value;
                    setPost({ ...post, exerciseObj: updatedExerciseObj });
                  }}
                  className='col-span-2 text-sm font-normal'
                />
              </div>
              <div className='mb-2 space-y-2 text-center font-semibold md:col-span-1 md:row-start-3 lg:col-span-1 lg:row-start-1'>
                <Label>Rep 2</Label>
                <Input
                  type='text'
                  value={exer.rep2}
                  name='rep2'
                  placeholder='0'
                  onChange={(e) => {
                    const updatedExerciseObj = [...post.exerciseObj];
                    updatedExerciseObj[index].rep2 = e.target.value;
                    setPost({ ...post, exerciseObj: updatedExerciseObj });
                  }}
                  className='text-sm font-normal'
                />
              </div>
              <div className='mb-2 space-y-2 text-center font-semibold md:col-span-1 md:row-start-3 lg:col-span-1 lg:row-start-1'>
                <Label>Rep 3</Label>
                <Input
                  type='text'
                  value={exer.rep3}
                  name='rep3'
                  placeholder='0'
                  onChange={(e) => {
                    const updatedExerciseObj = [...post.exerciseObj];
                    updatedExerciseObj[index].rep3 = e.target.value;
                    setPost({ ...post, exerciseObj: updatedExerciseObj });
                  }}
                  className='text-sm font-normal'
                />
              </div>
            </div>
          );
        })}

        <div className='mt-4 flex items-center justify-center'>
          <Button
            variant='outline'
            className='mx-auto mt-4 w-full lg:w-1/4'
            onClick={(e) => handleClick(e)}
          >
            Add Exercise
          </Button>
        </div>

        <div className='mt-12 flex w-full items-center justify-center gap-4 md:justify-end'>
          <Button
            disabled={submitting}
            size='sm'
            className='bg-teal-500 font-bold hover:bg-teal-600'
          >
            {submitting ? `${type}...` : type}
          </Button>

          <Link href='/dashboard' className='text-sm text-gray-500'>
            Cancel
          </Link>
        </div>
      </form>
    </section>
  );
};

export default WorkoutForm;
