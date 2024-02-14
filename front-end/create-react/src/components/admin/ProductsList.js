import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearError } from '../../slices/productsSlice'
import { getAdminProducts } from '../../actions/productsActions/productsActions'
import { toast } from 'react-toastify'
import Loader from '../layouts/Loader'
import AdminNavbar from './AdminNavbar'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { deleteProduct } from '../../actions/productsActions/singleProductAction'
import { clearProductDeleted } from '../../slices/singleProductSlice'

import { Popconfirm } from 'antd';

const ProductsList = () => {

    const dispatch = useDispatch()

    const { products = [], loading = true, error } = useSelector(state => state.orderState)
    const { isProductDeleted, error: productError } = useSelector(state => state.singleProductState)


    const [items, setItems] = useState([])
    const [filterVal, setFilterVal] = useState('')

    const handleFilter = (e) => {



        if (e.target.value === '') {
            setItems(products)
        }
        else {
            const filterResult = products.filter((product) => product.name.toLowerCase().includes(e.target.value.toLowerCase()))

            if (filterResult.length > 0) {
                setItems(filterResult)
            }
            else {
                setItems([{ 'name': "No Data", '_id': "No Data", 'price': "No Data", 'stock': "No Data", 'action': "No Data" }])
            }
        }
        setFilterVal(e.target.value)
    }

    const deleteHandler = (e, id) => {
        e.target.disabled = true
        dispatch(deleteProduct(id))
    }

    useEffect(() => {

        if (error || productError) {
            toast(error || productError, {
                position: toast.POSITION.TOP_CENTER,
                type: 'error',
                onOpen: () => dispatch(clearError())
            })
            return;
        }

        if (isProductDeleted) {
            toast('Product Deleted Successfully', {
                position: toast.POSITION.TOP_CENTER,
                type: 'success',
                onOpen: () => {
                    dispatch(clearProductDeleted())
                }
            })
            return;
        }

        const fetchData = async () => {
            const { data } = await axios.get('/api/admin/products')
            setItems(data.products)
        }

        fetchData()
        dispatch(getAdminProducts)

    }, [error, dispatch, isProductDeleted, productError])

    return (
        <>
            {loading ? <Loader /> :

                <Fragment>
                    <AdminNavbar />



                    <div className='flex flex-wrap lg:w-[70%] mt-5 mx-5 lg:mx-auto items-center justify-between'>
                        <p><b>Total Products :</b> {items && items.length}</p>
                        <Link to={'/admin/product/create'} className='bg-rose-500 flex gap-x-3 px-3 py-2 rounded-sm text-white items-center'>
                            <FaPlus /> Create Product
                        </Link >
                        <input type="search" placeholder='Serach...' value={filterVal} onChange={(e) => handleFilter(e)} className='border-2 rounded-md px-3 py-2 mt-3' />

                    </div>

                    <table className='border-collapse w-[100%] lg:w-[70%] my-[20px] mx-auto'>

                        <thead>
                            <tr className='text-sm md:text-base w-[100%] lg:w-[70%]'>
                                <th className='border border-[#ddd] text-center p-3' >Name</th>
                                <th className='border border-[#ddd] text-center p-3' >Price</th>
                                <th className='border border-[#ddd] text-center p-3' >Stock</th>
                                <th className='border border-[#ddd] text-center p-3' >Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.length > 0 && items.map((product, index) => (
                                <tr className='odd:bg-gray-100 text-sm md:text-base w-[100%] lg:w-[70%]' key={index}>
                                    <td className='border-x border-[#ddd]  p-2 xs:p-3' ><Link to={`/product/${product._id}`} >{product.name}</Link></td>
                                    <td className='border-x border-[#ddd] text-center p-2 xs:p-3' >&#8377; {product.price}</td>
                                    <td className='border-x border-[#ddd] text-center p-2 xs:p-3' >{product.stock}</td>
                                    <td className='border-x  border-[#ddd] text-center  p-2 xs:p-3 flex justify-center gap-x-2' >
                                        <Link to={`/admin/product/${product._id}`} className='bg-blue-500 p-2 xs:p-3 rounded-md '><MdOutlineEdit className='text-white text-xl' /></Link>

                                        <Popconfirm
                                            title="Are you sure?"
                                            placement='top'
                                            icon={false}
                                            okText="Yes"
                                            cancelText="No"
                                            onConfirm={(e) => deleteHandler(e, product._id)}
                                        >
                                            <button /* onClick={} */ className='bg-red-500 p-2 xs:p-3  rounded-md'><RiDeleteBin6Line className='text-white text-xl' /></button>

                                        </Popconfirm>
                                    </td>
                                </tr>)
                            )}
                        </tbody>
                    </table>

                </Fragment>
            }
        </>
    )
}

export default ProductsList