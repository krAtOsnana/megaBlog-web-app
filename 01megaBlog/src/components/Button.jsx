import React from 'react'

function Button({
    children,
    type='button',
    bgColor='bg-blue-600',
    textColor='white',
    className='',
    ...props
}) {
  return (
    <button className={`rounded-lg px-2 py-4 ${children} ${type} ${bgColor} ${textColor} ${className }`} {...props}>
        {children}
    </button>
  )
}

export default Button