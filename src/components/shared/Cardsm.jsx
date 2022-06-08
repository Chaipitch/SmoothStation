import React from 'react'

function Card({children}) {
  return (
    <div className='bg-gray-200 mx-3 rounded-md shadow-lg py-6 my-6'>{children}</div>
  )
}

export default Card