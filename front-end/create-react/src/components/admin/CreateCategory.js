import React, { useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const CreateCategory = () => {
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState("");

    const [subname1, setSubname1] = useState("");
    const [subname1Error, setSubname1Error] = useState("");

    const [subname2, setSubname2] = useState("");
    const [subname2Error, setSubname2Error] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        if (name === "") {
            setNameError("Please enter category");
        }
        if (subname1 === "") {
            setSubname1Error("Please enter sub category1")
        }
        if (subname1 === "") {
            setSubname2Error("Please enter sub category2")
        }
        if (name && subname1 && subname2) {
            console.log("coming---------")
        }
    }

    const changeHandler = (from) => {


    }

    return (
        <>
            {/* heading */}

            <div className='md:w-[70%] lg:w-[50%] mx-auto mt-12 hidden md:flex md:text-lg items-center gap-x-3 '>
                <Link to={'/admin/products'}><BsArrowLeft className="text-2xl " /> </Link>
                <p className='font-medium'>Back</p>
            </div>

            {/*create product*/}
            <form onSubmit={submitHandler} className='md:border-2 md:w-[70%] lg:w-[50%] md:mx-auto md:my-7'>

                <p className='px-3 py-3 text-sm md:text-xl font-bold text-gray-700 bg-gray-100 md:bg-white'>Create Product</p>

                {/* name */}
                <p className='mx-3 py-3 text-sm md:text-base font-bold text-gray-700 '>Category Name</p>
                <input onChange={e => setName(e.target.value)} type="text" placeholder='Ex: MEN or WOMEN' className='outline-none border rounded-sm box-border w-11/12 mx-3 px-3 py-2 focus:border-gray-700 placeholder:text-sm' />
                {nameError && <span className='text-red-600 ml-3'>{nameError}</span>}

                <p className='mx-3 py-3 text-sm md:text-base font-bold text-gray-700 '>Sub Category1</p>
                <input onChange={e => setSubname1(e.target.value)} type="text" placeholder='Ex: Topwear or Footwear' className='outline-none border rounded-sm box-border w-11/12 mx-3 px-3 py-2 focus:border-gray-700 placeholder:text-sm' />
                {subname1Error && <span className='text-red-600 ml-3'>{nameError}</span>}

                <p className='mx-3 py-3 text-sm md:text-base font-bold text-gray-700 '>Sub Category2</p>
                <input onChange={e => setSubname2(e.target.value)} type="text" placeholder='Ex: T-Shirt or Casual shoe' className='outline-none border rounded-sm box-border w-11/12 mx-3 px-3 py-2 focus:border-gray-700 placeholder:text-sm' />
                {subname2Error && <span className='text-red-600 ml-3'>{nameError}</span>}
                {/* SAVE */}
                <button className=' flex justify-center my-4 w-full' >
                    <p className='w-10/12 text-white bg-rose-500 rounded-sm py-3'>Create</p>
                </button>
            </form>
        </>
    )
}

export default CreateCategory