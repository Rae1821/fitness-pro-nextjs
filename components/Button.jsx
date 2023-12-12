import React from 'react'
import { useFormStatus } from 'react-dom';

const SubmitButton = () => {
    const { pending } = useFormStatus();


  return (
    <button type="submit" aria-disabled={pending} className="bg-blue-500 rounded px-4 py-2 text-white font-semibold">
        {pending ? "Adding user info..." : "Add Info"}
    </button>
  )
}

export default SubmitButton
