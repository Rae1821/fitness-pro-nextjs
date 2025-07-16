import Calendar from "@components/Calendar";
import Navbar from "@components/Navbar";

export default function CalendarPage() {
  return (
    <div
      className='flex min-h-screen flex-col items-center justify-center'
      data-theme='night'
    >
      <Navbar />
      <div className='mt-10'>
        <Calendar />
      </div>
    </div>
  );
}
