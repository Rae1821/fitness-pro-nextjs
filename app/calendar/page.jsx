import Calendar from "@/components/Calendar";

export default function CalendarPage() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <div className='mt-10'>
        <Calendar />
      </div>
    </div>
  );
}
