import React from 'react'
import CircularFormat from './circularFormat'
import CircularSidebar from './circularSidebar'
const circularEdit = () => {
  return (
    <div className='min-h-screen bg-white flex  '> 
    <div className='w-[30%]  bg-gray-800 h-screen flex-none fixed top-0 left-0 overflow-hidden pr-4'><CircularSidebar className=" "/></div>
    <div className='w-[80%] flex-auto  pl-[35%] scale-[85%]'><CircularFormat className=""/></div> 
</div>
  )
}

export default circularEdit