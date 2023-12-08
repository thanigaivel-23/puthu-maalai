import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const SearchBar = () => {

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
    <>
        <div id="search" className="hidden md:block  md:mt-1 md:grow md:mr-9"        >
            <form onSubmit={searchHandler}>
                <div className="flex">
                    <div className="relative w-full">
                        <input
                            type="text"
                            id="search"
                            onChange={(e)=>setKeyword(e.target.value)}
                            className="  placeholder:text-gray-500 focus:bg-transparent outline-none md:p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50  shadow-md rounded-md md:grow"
                            placeholder="Hey, what are you looking for"
                            required
                            value={keyword}
                            
                        />
                        <button
                            type="submit"
                            className="  md:absolute top-0 right-0 md:p-2.5 md:text-sm md:font-medium hmd:-full text-white rounded-2xl  focus:outline-none focus:ring-blue-300"
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
        </div>
    </>
  )
}

export default SearchBar