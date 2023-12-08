import React from 'react'
import Pagination from "react-js-pagination";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { MdOutlineArrowRightAlt } from "react-icons/md";


const SearchNextPage = ({currentPage, setCurrentPageNo, productsCount, productPerPage, handleNextPage, numOfPages }) =>{

  
    
    return (
      <>
       {productsCount> 0 && productsCount > productPerPage ?
         <div className="flex justify-center relative mb-16">
            <button onClick={handleNextPage} className="hidden  lg:flex lg:justify-center  items-center border-2 border-slate-800 text-slate-800 text-2xl gap-x-2 tracking-wide rounded-sm px-2 py-1">
                Next Page <MdOutlineArrowRightAlt />
            </button>

           <div className="flex absolute right-8">
              <Pagination 
                activePage={currentPage}
                onChange={setCurrentPageNo}      
                totalItemsCount={productsCount}
                itemsCountPerPage={productPerPage}
                nextPageText={<GrNext />}
                prevPageText={<GrPrevious  />}
                itemClass='flex items-center h-5 p-5  bg-[#edeef2] rounded-sm mx-1'
                hideFirstLastPages = {true}
                pageRangeDisplayed={1}
              />
              
                <p className='flex items-center h-5 p-5 rounded-sm mx-1'> of {numOfPages}</p>
           </div>

         </div> : null}
      </> 
     )
  }

export default SearchNextPage