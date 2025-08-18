import UpdateWorkout from "@/components/UpdateWorkout";
import { Suspense } from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const EditWorkout = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UpdateWorkout className={montserrat.className} />
    </Suspense>
  );
};

export default EditWorkout;
