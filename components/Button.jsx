import React from 'react'

const Button = ({ type, containerStyles, handleClick,  }) => {
  return (
    <button
        type={type}
        disabled={false}
        className={`flex flex-row relative justify-center items-center outline-none ${containerStyles}`}
        onClick={handleClick}
>
    {type}

    </button>
  )
}

export default Button
