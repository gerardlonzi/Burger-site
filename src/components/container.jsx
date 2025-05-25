import React from 'react'

export default function Container({children}) {
  return (
    <div className='sm:px-14 md:px-20 px-3'>
        {children}
    </div>
  )
}
