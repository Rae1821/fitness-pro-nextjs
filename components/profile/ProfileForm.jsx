"use client";

import { addUserInfo } from "@actions/actions.js";
import { useRef } from 'react';
import SubmitButton from "@components/Button";

const ProfileForm = () => {
  const ref = useRef(null);

  return (
    <form ref={ref} action={async formData => {
      ref.current?.reset();

      const { error } = await addUserInfo(formData);
      if (error) {
        alert(error.message);
      }
      await addUserInfo(formData);
      }}
      className="flex flex-col w-[300px] my-16">
    {/* <label>
        <span className="flex flex-col font-semibold justify-center items-center">Date</span>
        <input
            type="text"
            content="date"
            placeholder="Today's Date"
            value={content}
            onChange={() => {}}
            className="input input-bordered w-full flex rounded-lg mt-2 p-3 text-sm outline-0"
            required
        />
    </label> */}
    <label>
        <span className="flex flex-col font-semibold justify-center items-center">Weight (lbs)</span>
        <input
            type="text"
            name="weight"
            placeholder="Your current weight"
            value={weight}
            onChange={() => {}}
            className="input input-bordered w-full flex rounded-lg mt-2 p-3 text-sm outline-0"
        />
    </label>

      <SubmitButton />
    </form>
  )
}

export default ProfileForm
