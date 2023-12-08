import React from "react";

const Pincode = () => {
  return (
    <>
      <div className="flex items-center justify-between border py-4 md:py-6">
        <div className="font-bold pl-3 text-sm md:text-base">
          Check delivery time & services
        </div>
        <div className="pr-3">
          <button className="font-bold text-rose-500 border-2 border-rose-500 rounded-md px-1 md:px-3  py-1 text-xs md:text-base">
            Enter Pin Code
          </button>
        </div>
      </div>
    </>
  );
};

export default Pincode;
