import UpdateWorkout from "@components/UpdateWorkout";
import { Suspense } from "react";

const EditWorkout = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UpdateWorkout />
    </Suspense>
  );
};

export default EditWorkout;
