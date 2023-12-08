import React, { useEffect } from "react";

import ProductSilder from "./main/ProductSilder";
import PSilderHeading from "./main/PSilderHeading";
import ProductContent from "./main/ProductContent";
import { useDispatch } from "react-redux";
import { getSingleProduct } from "../../actions/singleProductAction";
import { useParams } from "react-router-dom";

const ProductPage = () => {

  const {id} = useParams() 
  const dispatch = useDispatch();
   
  useEffect(()=>{
    dispatch(getSingleProduct(id))
  },[dispatch, id])

  return ( 
    <>
      <ProductContent />
      <PSilderHeading />
      <ProductSilder />
    </>
  );
};

export default ProductPage;
