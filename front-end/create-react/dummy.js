//next page

<div className="lg:w-[70%] lg:ml-12  lg:mt-16 mb-12 lg:mb-32 flex justify-center items-center relative">
      <button className="hidden lg:flex  items-center border-2 border-slate-800 text-slate-800 text-2xl gap-x-2 tracking-wide rounded-sm px-2 py-1">
        Next Page <MdOutlineArrowRightAlt />
      </button>

      <div className=" lg:absolute  lg:right-0 flex items-center gap-x-1  ">
        <div className="py-3 px-4 md:px-5 bg-[#edeef2] text-sm md:text-lg rounded-md">
          01
        </div>
        <div className="p-3 text-sm md:text-base ">of 55</div>
        <div className="py-3 px-3 md:px-5 bg-[#edeef2]   rounded-sm">
          <GrPrevious className="w-4 md:w-6 h-4 md:h-6" />
        </div>
        <div className="py-3 px-3 md:px-5 bg-[#edeef2]   rounded-sm">
          <GrNext className="w-4 md:w-6 h-4 md:h-6" />
        </div>
      </div>
    </div>