import React from 'react'

function Error({e}) {
  return (
    <div className='bg-red-500 text-white rounded p-4'>Error: {e.toString()}</div>
  )
}

export default Error