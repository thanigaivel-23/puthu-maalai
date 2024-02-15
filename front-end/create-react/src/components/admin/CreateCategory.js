import React, { useState, usedis, useEffect } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createCategory } from '../../actions/categoryAction';
import { setCategoryCreated } from '../../slices/categorySlice';

const CreateCategory = () => {
    const { iscategorycreated } = useSelector(state => state.categoryState)
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState("");

    const [subname1, setSubname1] = useState("");
    const [subname1Error, setSubname1Error] = useState("");

    const [subname2, setSubname2] = useState("");
    const [subname2Error, setSubname2Error] = useState("");

    const dispatch = useDispatch()

    useEffect(() => {
        if (iscategorycreated) {
            toast.info(iscategorycreated);
            dispatch(setCategoryCreated(""));
        }
    }, [iscategorycreated])


    const checkValidation = () => {
        let isValid = true;
        if (name === "") {
            setNameError("Please enter category");
            isValid = false;
        }
        if (subname1 === "") {
            setSubname1Error("Please enter sub category1");
            isValid = false;
        }
        if (subname2 === "") {
            setSubname2Error("Please enter sub category2");
            isValid = false;
        }
        return isValid;
    }

    const submitHandler = () => {
        if (checkValidation()) {
            const reqObj = {};
            reqObj.categoryName = name;
            reqObj.subCategoryName1 = subname1;
            reqObj.subCategoryName2 = subname2;
            dispatch(createCategory(reqObj))
            setName("");
            setNameError("")
            setSubname1("");
            setSubname1Error("")
            setSubname2("");
            setSubname2Error("")
        }
    }

    const changeHandler = (e, from) => {

        const value = e.target.value;
        if (from === "name") {
            setName(value);
            if (value.trim().length === 0) {
                setNameError("Please enter category");
            } else {
                setNameError("")
            }

        }
        if (from === "subname1") {
            setSubname1(value);
            if (value.trim().length === 0) {
                setSubname1Error("Please enter sub category1")
            } else {

                setSubname1Error("")
            }

        }
        if (from === "subname2") {
            setSubname2(value);
            if (value.trim().length === 0) {
                setSubname2Error("Please enter sub category2");
            } else {
                setSubname2Error("")
            }

        }

    }

    return (
        <>
            {/* heading */}

            <div className='md:w-[70%] lg:w-[50%] mx-auto mt-12 hidden md:flex md:text-lg items-center gap-x-3 '>
                <Link to={'/admin/products'}><BsArrowLeft className="text-2xl " /> </Link>
                <p className='font-medium'>Back</p>
            </div>

            {/*create product*/}
            <form onSubmit={e => e.preventDefault()} className='md:border-2 md:w-[70%] lg:w-[50%] md:mx-auto md:my-7'>

                <p className='px-3 py-3 text-sm md:text-xl font-bold text-gray-700 bg-gray-100 md:bg-white'>Create Product</p>

                {/* name */}
                <p className='mx-3 py-3 text-sm md:text-base font-bold text-gray-700 '>Category Name</p>
                <input onChange={e => changeHandler(e, "name")} value={name} type="text" placeholder='Ex: MEN or WOMEN' className='outline-none border rounded-sm box-border w-11/12 mx-3 px-3 py-2 focus:border-gray-700 placeholder:text-sm' />
                {nameError && <span className='text-red-600 ml-3'>{nameError}</span>}

                <p className='mx-3 py-3 text-sm md:text-base font-bold text-gray-700 '>Sub Category1</p>
                <input onChange={e => changeHandler(e, "subname1")} type="text" value={subname1} placeholder='Ex: Topwear or Footwear' className='outline-none border rounded-sm box-border w-11/12 mx-3 px-3 py-2 focus:border-gray-700 placeholder:text-sm' />
                {subname1Error !== "" && <span className='text-red-600 ml-3'>{subname1Error}</span>}

                <p className='mx-3 py-3 text-sm md:text-base font-bold text-gray-700 '>Sub Category2</p>
                <input onChange={e => changeHandler(e, "subname2")} type="text" value={subname2} placeholder='Ex: T-Shirt or Casual shoe' className='outline-none border rounded-sm box-border w-11/12 mx-3 px-3 py-2 focus:border-gray-700 placeholder:text-sm' />
                {subname2Error !== "" && <span className='text-red-600 ml-3'>{subname2Error}</span>}
                {/* SAVE */}
                <button className=' flex justify-center my-4 w-full' onClick={() => submitHandler()} >
                    <p className='w-10/12 text-white bg-rose-500 rounded-sm py-3'>Create</p>
                </button>
            </form>
        </>
    )
}

export default CreateCategory