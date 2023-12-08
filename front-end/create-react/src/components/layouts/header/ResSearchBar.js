import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';


const ResSearchBar = () => {

    const [keyword, setKeyword] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    
    const searchHandler = (e) =>{
        e.preventDefault();
        navigate(`/search/${keyword}`);
    }

    const clearKeyword = ()=>{

        setKeyword("");

    }

    useEffect(()=>{
        if(location.pathname === `/`){
            clearKeyword()
        }
        
    },[location])

  return (
    <form onSubmit={searchHandler}>
        <div className="md:hidden flex justify-center pb-2">
            <div className="relative w-[89%]">
              <input
                type="text"
                id="search"
                onChange={(e)=>setKeyword(e.target.value)}
                className=" mr-3 placeholder:text-gray-500  outline-none p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-100   rounded-full "
                placeholder="Hey, what are you looking for"
                required
                value={keyword}
              />
              <button
                type="submit"
                className="  absolute top-3 right-3  text-white rounded-2xl  focus:outline-none focus:ring-blue-300"
              >
                <svg
                  className="w-4 h-4 text-gray-800 md:mr-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </div>
        </div>
    </form>
  )
}

export default ResSearchBar