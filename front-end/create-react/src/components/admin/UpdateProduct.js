import React, { useEffect, useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleProduct, updateProduct } from '../../actions/productsActions/singleProductAction'
import { toast } from 'react-toastify'
import { clearError, clearProductUpdated } from '../../slices/singleProductSlice'
import { FaRegTrashCan } from "react-icons/fa6"

const UpdateProduct = () => {

    const { id: productId } = useParams()

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [discount, setDiscount] = useState('')
    const [description, setDescription] = useState('')
    const [stock, setStock] = useState('')
    const [sellerName, setSellerName] = useState('')
    const [size, setSize] = useState('')
    const [color, setColor] = useState('')
    const [category, setCategory] = useState('')
    const [brand, setBrand] = useState('')
    const [type, setType] = useState('')
    const [fabric, setFabric] = useState('')
    const [style, setStyle] = useState('')
    const [sizeAndFit, setSizeAndFit] = useState('')
    const [images, setImages] = useState([])
    const [imagePerview, setImagePerview] = useState([])
    const [imagesCleared, setImagesCleared] = useState(false)

    const imageHandler = (e) => {
        const files = Array.from(e.target.files)

        files.forEach((file) => {
            const reader = new FileReader()

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImagePerview(oldArray => [...oldArray, reader.result])
                    setImages(oldArray => [...oldArray, file])
                }
            }

            reader.readAsDataURL(file)
        })
    }

    const { loading, isProductUpdated, error, singleProduct } = useSelector(state => state.singleProductState)

    const navigate = useNavigate()
    const dispatch = useDispatch()


    const submitHandler = (e) => {

        e.preventDefault();
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', price)
        formData.append('discount', discount)
        formData.append('description', description)
        formData.append('stock', stock)
        formData.append('seller', sellerName)
        formData.append('size', size)
        formData.append('color', color)
        formData.append('category', category)
        formData.append('brand', brand)
        formData.append('type', type)
        formData.append('fabric', fabric)
        formData.append('style', style)
        formData.append('sizeAndFit', sizeAndFit)
        console.log(images);
        console.log(imagePerview);
        images.forEach(image => {
            formData.append('images', image)
        })
        formData.append('imagesCleared', imagesCleared)

        dispatch(updateProduct(formData, productId))

    }

    const clearImagesHandler = () => {
        setImagePerview([])
        setImages([])
        setImagesCleared(true)
    }

    useEffect(() => {
        if (isProductUpdated) {
            toast('Product Created Successfully', {
                position: toast.POSITION.TOP_CENTER,
                type: 'success',
                onOpen: () => {
                    dispatch(clearProductUpdated())
                }
            })
            navigate('/admin/products')
            return;
        }

        if (error) {
            toast(error, {
                position: toast.POSITION.TOP_CENTER,
                type: 'error',
                onOpen: () => {
                    dispatch(clearError())
                }
            })
            return;
        }

        dispatch(getSingleProduct(productId))


    }, [isProductUpdated, error, dispatch, navigate, productId])

    useEffect(() => {
        if (singleProduct._id) {
            setName(singleProduct.name)
            setPrice(singleProduct.price)
            setDiscount(singleProduct.discount)
            setDescription(singleProduct.description)
            setStock(singleProduct.stock)
            setSellerName(singleProduct.seller)
            setSize(singleProduct.size)
            setColor(singleProduct.colors)
            setCategory(singleProduct.category)
            setBrand(singleProduct.brand)
            setStyle(singleProduct.style)
            setSizeAndFit(singleProduct.sizeAndFit)
            setFabric(singleProduct.fabric)
            setType(singleProduct.type)

            let images = []
            singleProduct.images.forEach((image) => {
                images.push(image.image)
            })
            setImagePerview(images)

        }
    }, [singleProduct])

    return (
        <>
            {/* heading */}

            <div className='md:w-[70%] lg:w-[50%] mx-auto mt-12 hidden md:flex md:text-lg items-center gap-x-3 '>
                <Link to={'/admin/products'}><BsArrowLeft className="text-2xl " /> </Link>
                <p className='font-medium'>Back</p>
            </div>

            {/*create product*/}
            <form onSubmit={submitHandler} className='md:border-2 md:w-[70%] lg:w-[50%] md:mx-auto md:my-7'>

                <p className='px-3 py-3 text-sm md:text-xl font-bold text-gray-700 bg-gray-100 md:bg-white'>Update Product</p>

                {/* name */}
                <p className='mx-3 py-3 text-sm md:text-base font-bold text-gray-700 '>Name of the Product</p>

                <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder='Enter Product Name' className='outline-none border rounded-sm box-border w-11/12 mx-3 mb-3 px-3 py-2 focus:border-gray-700 placeholder:text-sm' />

                {/* price */}
                <p className='mx-3 py-3 text-sm md:text-base font-bold text-gray-700 '>Price</p>

                <input onChange={(e) => setPrice(e.target.value)} value={price} onch type="number" placeholder='Enter Productn Price Without Discount ' className='outline-none border rounded-sm box-border w-11/12 mx-3 mb-3 px-3 py-2 focus:border-gray-700 placeholder:text-sm' />

                <input onChange={(e) => setDiscount(e.target.value)} value={discount} type="number" placeholder='Enter Discount in %' className='outline-none border rounded-sm box-border w-11/12 mx-3 mb-3 px-3 py-2 focus:border-gray-700 placeholder:text-sm' />

                <input value={Number(price) - Number(Math.round(price * discount / 100)) || 'final price'} type="number" placeholder='Final Price' readOnly className='outline-none border rounded-sm box-border w-11/12 mx-3 mb-3 px-3 py-2 focus:border-gray-700 placeholder:text-sm' />

                {/* description */}
                <p className='mx-3 py-3 text-sm md:text-base font-bold text-gray-700 '>Description</p>

                <textarea onChange={(e) => setDescription(e.target.value)} value={description} cols="20" rows="6" placeholder='Description' className='outline-none border rounded-sm box-border w-11/12 mx-3 mb-3 px-3 py-2 focus:border-gray-700 placeholder:text-sm'></textarea>

                <input onChange={(e) => setStock(e.target.value)} value={stock} type="number" placeholder='Stock' className='outline-none border rounded-sm box-border w-11/12 mx-3 mb-3 px-3 py-2 focus:border-gray-700 placeholder:text-sm' />

                <input onChange={(e) => setSellerName(e.target.value)} value={sellerName} type="text" placeholder='Seller Name' className='outline-none border rounded-sm box-border w-11/12 mx-3 mb-3 px-3 py-2 focus:border-gray-700 placeholder:text-sm' />

                <input onChange={(e) => setSize(e.target.value)} value={size} type="text" placeholder='Size' className='outline-none border rounded-sm box-border w-11/12 mx-3 mb-3 px-3 py-2 focus:border-gray-700 placeholder:text-sm' />

                <input onChange={(e) => setColor(e.target.value)} value={color} type="text" placeholder='Color' className='outline-none border rounded-sm box-border w-11/12 mx-3 mb-3 px-3 py-2 focus:border-gray-700 placeholder:text-sm' />

                <input onChange={(e) => setCategory(e.target.value)} value={category} type="text" placeholder='Category' className='outline-none border rounded-sm box-border w-11/12 mx-3 mb-3 px-3 py-2 focus:border-gray-700 placeholder:text-sm' />

                <input onChange={(e) => setBrand(e.target.value)} value={brand} type="text" placeholder='Brand' className='outline-none border rounded-sm box-border w-11/12 mx-3 mb-3 px-3 py-2 focus:border-gray-700 placeholder:text-sm' />

                <input onChange={(e) => setType(e.target.value)} value={type} type="text" placeholder='Type' className='outline-none border rounded-sm box-border w-11/12 mx-3 mb-3 px-3 py-2 focus:border-gray-700 placeholder:text-sm' />

                <input onChange={(e) => setSizeAndFit(e.target.value)} value={sizeAndFit} type="text" placeholder='Size and Fit' className='outline-none border rounded-sm box-border w-11/12 mx-3 mb-3 px-3 py-2 focus:border-gray-700 placeholder:text-sm' />

                <input onChange={(e) => setFabric(e.target.value)} value={fabric} type="text" placeholder='Fabric' className='outline-none border rounded-sm box-border w-11/12 mx-3 mb-3 px-3 py-2 focus:border-gray-700 placeholder:text-sm' />

                <input onChange={(e) => setStyle(e.target.value)} value={style} type="text" placeholder='Style' className='outline-none border rounded-sm box-border w-11/12 mx-3 mb-3 px-3 py-2 focus:border-gray-700 placeholder:text-sm' />

                {/* images */}
                <p className='mx-3 py-3 text-sm md:text-base font-bold text-gray-700 '>Images</p>

                <div className='flex items-center mx-3'>
                    {imagePerview.length > 0 && <span onClick={clearImagesHandler} className='flex items-center cursor-pointer gap-x-2 text-rose-500'> <FaRegTrashCan className='text-xl' /> Clear All </span>}
                    {imagePerview.map((image, index) => (
                        <img className='m-2  ' key={index} src={image} alt='preview images' height={'52'} width={'55'} />
                    ))}
                </div>

                <div className='m-3 mb-9 w-11/12 flex relative '>

                    <label htmlFor="product_img"
                        className='cursor-pointer w-full border px-3 py-2 rounded-md bg-gray-100 z-10'>
                        Choose Images
                    </label>

                    <input onChange={imageHandler} name='productPic' id='product_img' type="file" className='absolute' />
                </div>

                {/* SAVE */}
                <button className=' flex justify-center my-4 w-full' disabled={loading} >
                    <p className='w-10/12 text-white bg-rose-500 disabled:bg-rose-400 rounded-sm py-3'>Update Product</p>
                </button>

            </form>
        </>
    )
}

export default UpdateProduct