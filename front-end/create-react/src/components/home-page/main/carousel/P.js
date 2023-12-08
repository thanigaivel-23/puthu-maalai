import React from 'react'
import { GrLinkPrevious } from "react-icons/gr";


const P = ({onClick}) => {
  return (
    <div onClick={onClick} className='flex items-center'>
      <button className="p-3  rounded-full bg-white border border-gray-200 shadow-lg">
        <GrLinkPrevious />
      </button>
    </div>
  )
}

export default P