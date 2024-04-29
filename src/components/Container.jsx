import React from 'react'

function Container({children}) {
  return <div className='w-full max-w-7xl dark:bg-gray-800'>{children}</div>;
}

export default Container