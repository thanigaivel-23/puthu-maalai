import React from "react";
import { GrLinkNext } from "react-icons/gr";


const N = ({ onClick }) => {
  return (
    <div onClick={onClick} className='flex  items-center'>
      <button className="p-3  rounded-full bg-white border border-gray-200 shadow-lg">
        <GrLinkNext />
      </button>
    </div>
  );
};

export default N;
