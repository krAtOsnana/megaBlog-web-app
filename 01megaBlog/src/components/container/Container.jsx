import React from 'react'

function Container({children}) {
  return <div className='w-full max-w-7xl mx-auto px-4'>
    {children}</div>;  
    //we dont have to use a parenthesis () for wraping a return statement 
    //if it is a single line return statement
  
}

export default Container