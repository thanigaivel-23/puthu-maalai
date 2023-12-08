import React, { useEffect, useState } from 'react'
import ShopFilter from '../shop-page/main/ShopFilter'
import ShopSortBy from '../shop-page/main/ShopSortBy'
import ShowSearchProduct from './content/ShowSearchProduct'


import { toast } from 'react-toastify';
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from '../../actions/productsActions';
import { useParams } from 'react-router-dom';
import SearchNextPage from './content/SearchNextPage';

const SearchPage = () => {

  const dispatch = useDispatch();
  const {products, loading, error, productsCount, productPerPage} = useSelector((state)=>state.productsState)
  
  //For next page--------------------------------------
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
  
  //for Searching ----------------------------------------
  const {keyword} = useParams();

  let fristKeyword = localStorage.getItem('fristKeyword');
  
  //if in page 2 and searching new keyword
  if((currentPage >1) && (fristKeyword !== keyword)){
      setCurrentPage(1)
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


  


  // For category filter------------------------------------------------------------------> 
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

    dispatch(getProducts(keyword, price, categoryFilter, currentPage))
    window.scrollTo({top: 0});
    

  },[error, dispatch, keyword, priceChanged, categoryFilter, currentPage])




  return (
    <>
      <div className="text-center font-bold  md:text-3xl lg:text-5xl lg:mb-10 mt-4 md:mt-9">
        Search Products
      </div>

      <div className="lg:flex lg:justify-evenly lg:mx-12 lg:gap-x-8 ">
        {/* left     */}

        <div className=" lg:w-[30%]">
          <ShopFilter price={price} setPrice={setPrice} setPriceChanged={setPriceChanged} categoryFilter={categoryFilter} setCategoryFilter={setCategoryFilter}/>
        </div>

        {/* right */}
        <div className=" lg:w-[70%] ">
          <ShopSortBy/>
          <ShowSearchProduct loading={loading} products={products}/>
          <SearchNextPage 
                    currentPage={currentPage}
                    setCurrentPageNo={setCurrentPageNo}
                    productsCount={productsCount}
                    productPerPage={productPerPage}
                    numOfPages={numOfPages}
                    handleNextPage={handleNextPage}
                  />
        </div>
        
      </div>
    </>
  )
}

export default SearchPage