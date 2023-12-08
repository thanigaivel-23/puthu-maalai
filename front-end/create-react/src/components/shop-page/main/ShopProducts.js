import React, { useEffect, useState } from "react";
import ShopFilter from "./ShopFilter";
import ShopSortBy from "./ShopSortBy";
import ShopShowProduct from "./ShopShowProduct";
import NextPage from "./NextPage";

import { useDispatch } from "react-redux";
import { getProducts } from "../../../actions/productsActions";
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';


const ShopProducts = () => {
  
  const dispatch = useDispatch();
  const {products, loading, error, productsCount, productPerPage, totalSearchProducts} = useSelector((state)=>state.productsState)

//For next page--------------------------------------------------------------------------------------------------------------->
  const [currentPage, setCurrentPage] = useState(1);
  const numOfPages = Math.ceil(productsCount / productPerPage )

  const setCurrentPageNo = (pageNo)=>{

    setCurrentPage(pageNo)
  }

  const handleNextPage = ()=>{
    if(currentPage<numOfPages){
      setCurrentPage(currentPage + 1)
    }
  }


  //For Price filter-------------------------------------------------------------------------------------------------------->
  const [price, setPrice] = useState([0,100])
  const [priceChanged, setPriceChanged] = useState(price);

  //getting the data from local storage
  let priceMin = localStorage.getItem('priceMin');
  let priceMax = localStorage.getItem('priceMax');
  
  // //if in page 2 and searching new keyword
  if((currentPage >1) && ((priceMin != price[0]) ||  (priceMax != price[1]))){
    setCurrentPage(1)
  }

  // For category filter------------------------------------------------------------------------------------------> 
  const [categoryFilter, setCategoryFilter] = useState([]);
           
  //getting the data from local storage
  let localStorageCategoryFilter = localStorage.getItem('localStorageCategoryFilter');

  //converting an array to string 
  let categoryConvertToString = categoryFilter.map((x)=>`category=${x}`)
  categoryConvertToString = categoryConvertToString.toString().replaceAll(",", '&')

  // //if in page 2 and searching new keyword
  if((currentPage >1) && (localStorageCategoryFilter !== categoryConvertToString) && categoryFilter.length>=1){
      setCurrentPage(1)
    }

  useEffect(()=>{
  

    if(error){
      return toast.error(error,{position: toast.POSITION.TOP_CENTER})
    }
    
    dispatch(getProducts(null, price, categoryFilter, currentPage))
    window.scrollTo({top: 0});
  },[error,dispatch, priceChanged, currentPage, categoryFilter])


  return (
    <>
      <div className="text-center font-bold  md:text-3xl lg:text-5xl lg:mb-10 mt-4 md:mt-9">ALL PRODUCTS
      </div>

      <div className="lg:flex lg:justify-evenly lg:mx-12 lg:gap-x-8 ">

        {/* left     */}
        <div className=" lg:w-[30%]">
          <ShopFilter price={price} setPrice={setPrice} setPriceChanged={setPriceChanged} categoryFilter={categoryFilter} setCategoryFilter={setCategoryFilter} />
        </div>

        {/* right */}
        <div className=" lg:w-[70%] ">
          <ShopSortBy/>
          <ShopShowProduct loading={loading} products={products}/>
        </div>

      </div>

      <NextPage  
            currentPage={currentPage}
            setCurrentPageNo={setCurrentPageNo}
            productsCount={productsCount}
            productPerPage={productPerPage}
            numOfPages={numOfPages}
            handleNextPage={handleNextPage}
            />
    </>
  );
};

export default ShopProducts;
