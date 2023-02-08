import React from 'react'

const Button = ({ children, className, onClick, variant = 'primary' }) => {
  return (
    <button
      className={`w-48 rounded-md font-medium my-6 mx-auto py-3 hover:opacity-80 ${
        variant === 'primary' ? 'bg-[#00df9a] text-black' : 'bg-black text-[#00df9a]'
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
