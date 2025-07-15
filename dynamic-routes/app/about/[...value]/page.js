import React from 'react'

export default function page({params}) {
        console.log("params from server:", params);
  return (
  
    <div>
      <h1 className='text-3xl text-amber-400 font-bold text-center mt-16'>Hello World</h1>
    </div>
  )
}
