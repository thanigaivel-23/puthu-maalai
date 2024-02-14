import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAdminProducts } from '../../actions/productsActions/productsActions'
import { toast } from 'react-toastify'
import Loader from '../layouts/Loader'
import AdminNavbar from './AdminNavbar'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Popconfirm } from 'antd';
import { deleteOrders } from '../../actions/orderActions'
import { clearOrderDeleted, clearOrderError } from '../../slices/orderSlice'

const OrdersList = () => {
  const dispatch = useDispatch()
  const { adminOrdersList = [], loading = true, error, isOrderDeleted } = useSelector(state => state.productsState)


  const [OrderItems, setOrderItems] = useState([])
  const [filterVal, setFilterVal] = useState('')

  const handleFilter = (e) => {

    if (e.target.value === '') {
      setOrderItems(adminOrdersList)
    }
    else {
      const filterResult = adminOrdersList.filter((order) => order._id.toLowerCase().includes(e.target.value.toLowerCase()))

      if (filterResult.length > 0) {
        setOrderItems(filterResult)
      }
      else {
        setOrderItems([{ '_id': "No Data", 'price': "No Data", 'stock': "No Data", 'action': "No Data" }])
      }
    }
    setFilterVal(e.target.value)
  }

  const deleteHandler = (e, id) => {
    e.target.disabled = true
    dispatch(deleteOrders(id))
  }

  useEffect(() => {

    if (error) {
      toast(error, {
        position: toast.POSITION.TOP_CENTER,
        type: 'error',
        onOpen: () => dispatch(clearOrderError())
      })
      return;
    }

    if (isOrderDeleted) {
      toast('Order Deleted Successfully', {
        position: toast.POSITION.TOP_CENTER,
        type: 'success',
        onOpen: () => {
          dispatch(clearOrderDeleted())
        }
      })
      return;
    }

    const fetchData = async () => {
      const { data } = await axios.get('/api/admin/allorders')
      setOrderItems(data.orders)
    }

    fetchData()
    dispatch(getAdminProducts)

  }, [error, dispatch, isOrderDeleted])

  return (
    <>
      {loading ? <Loader /> :

        <Fragment>
          <AdminNavbar />



          <div className='flex flex-wrap lg:w-[70%] mt-5 mx-5 lg:mx-auto items-center justify-between'>
            <p><b>Total Order :</b> {OrderItems && OrderItems.length}</p>

            <input type="search" placeholder='Serach...' value={filterVal} onChange={(e) => handleFilter(e)} className='border-2 rounded-md px-3 py-2 mt-3' />

          </div>

          <table className='border-collapse w-[100%] lg:w-[70%] my-[20px] mx-auto'>

            <thead>
              <tr className='text-sm md:text-base w-[100%] lg:w-[70%]'>
                <th className='border border-[#ddd] text-center p-3' >ID</th>
                <th className='border border-[#ddd] text-center p-3' >Number of Items</th>
                <th className='border border-[#ddd] text-center p-3' >Amount</th>
                <th className='border border-[#ddd] text-center p-3' >Status</th>
                <th className='border border-[#ddd] text-center p-3' >Action</th>
              </tr>
            </thead>
            <tbody>
              {OrderItems.length > 0 && OrderItems.map((order, index) => (
                <tr className='odd:bg-gray-100 text-sm md:text-base w-[100%] lg:w-[70%]' key={index}>
                  <td className='border-x border-[#ddd]  p-2 xs:p-3' ><Link to={`/admin/order/${order._id}`} >{order._id}</Link></td>
                  <td className='border-x border-[#ddd] text-center p-2 xs:p-3' > {order.price}</td>
                  <td className='border-x border-[#ddd] text-center p-2 xs:p-3' >&#8377; {order.totalPrice}</td>
                  <td className='border-x border-[#ddd] text-center p-2 xs:p-3' >{order.stock}</td>
                  <td className='border-x  border-[#ddd] text-center  p-2 xs:p-3 flex justify-center gap-x-2' >
                    <Link to={`/admin/product/${order._id}`} className='bg-blue-500 p-2 xs:p-3 rounded-md '><MdOutlineEdit className='text-white text-xl' /></Link>

                    <Popconfirm
                      title="Are you sure?"
                      placement='top'
                      icon={false}
                      okText="Yes"
                      cancelText="No"
                      onConfirm={(e) => deleteHandler(e, order._id)}
                    >
                      <button className='bg-red-500 p-2 xs:p-3  rounded-md'><RiDeleteBin6Line className='text-white text-xl' /></button>

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

export default OrdersList