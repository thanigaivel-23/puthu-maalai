import React from "react";
import ImgSilder from "./ImgSilder";

import AboutProduct from "./productContent/AboutProduct";
import Product3Boxes from "./productContent/Product3Boxes";
import ProductAddtoCart from "./productContent/ProductAddtoCart";
import ProductColor from "./productContent/ProductColor";
import ProductInfo from "./productContent/ProductInfo";
import ProductPinCode from "./productContent/ProductPinCode";
import ProductPrice from "./productContent/ProductPrice";
import ProductRating from "./productContent/ProductRating";
import ProductSize from "./productContent/ProductSize";
import ProductTitle from "./productContent/ProductTitle";
import ProductTop from "./productContent/ProductTop";
import ProductReview from "./productContent/ProductReview";
import { useSelector } from "react-redux";
import Loader from "../../layouts/Loader";
import MetaData from "../../layouts/MetaData";

const ProductContent = () => {

  
  const {loading, singleProduct} = useSelector((state)=>state.singleProductState )




  return (
    <>
      {loading ? <Loader/> : 
                        <main className="lg:flex lg:mx-10 lg:mt-10">
                          <MetaData titte={singleProduct.name}/>
                        {/* left */}
                        <div className=" lg:w-2/5 relative hidden lg:block">
                          <ImgSilder singleProduct={singleProduct}/>
                        </div>

                        {/* right */}
                        <div className=" lg:ml-10 lg:w-3/5 ">
                          <ProductTop />
                          <ProductTitle name = {singleProduct.name}/>
                          <div className=" relative  lg:hidden">
                            <ImgSilder singleProduct={singleProduct} />
                          </div>

                          <ProductRating ratings={singleProduct.ratings} numOfReviews = {singleProduct.numOfReviews}/>
                          <ProductPrice price={singleProduct.price} discount={singleProduct.discount}/>
                          <ProductSize  size={singleProduct.size}/>
                          <ProductColor colors={singleProduct.colors}/>
                          <ProductAddtoCart />
                          <ProductPinCode />
                          <Product3Boxes />
                          <AboutProduct description={singleProduct.description}/>
                          <ProductInfo brand={singleProduct.brand} type={singleProduct.type} fabric={singleProduct.fabric} style={singleProduct.style} sizeAndFit={singleProduct.sizeAndFit} />
                          <ProductReview reviews = {singleProduct.reviews}/>
                        </div>
                      </main>       }
      

      
    </>
  );
};

export default ProductContent;
